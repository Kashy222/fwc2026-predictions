# Build Spec: World Cup 2026 Radial Knockout Bracket — Prediction Engine + Path-Based Movement

Paste this entire document as a single prompt into Antigravity IDE. It describes exactly what is broken/missing and exactly how to implement it. Follow it section by section, in order. Do not simplify the data model — the animation and undo logic both depend on it.

---

## 1. What currently exists vs. what's broken

The app already renders a radial knockout bracket: 32 team circles on the outer ring, connector lines running inward through 5 merge levels (Round of 32 → Round of 16 → Quarterfinal → Semifinal → Final), to a trophy at the center. This part is visually fine.

**What is missing/broken is the prediction engine:**
1. There is no real concept of a "match" with two known competitors and a result.
2. Clicking a team does not reliably advance it to the correct next-round slot.
3. There is no way to undo a pick by clicking the greyed-out loser.
4. A downstream pick is not invalidated when an upstream pick changes (you can end up with a "winner" in round 3 whose round 2 match no longer agrees with it).
5. The winning flag currently teleports/repaints at the next position instead of visually sliding along the actual connector line that's drawn on screen.

Fix all five. Sections 2–6 below specify exactly how.

---

## 2. Data model (implement this first, exactly as described)

Model the bracket as a **binary tree of Match nodes**, built bottom-up from 32 leaves. Do not model it as a flat list of circles — every piece of logic below (undo, cascade-reset, "current match" detection, path animation) depends on parent/child references existing on the node itself.

```
Leaf (Round of 32 entrant):
  id: string                // stable id, e.g. "leaf-0".."leaf-31"
  team: { name, flagCode }  // null if TBD (playoff slot not yet determined)
  angle: number             // fixed polar angle on the outer ring

Match (every merge point, levels 1..5):
  id: string                // e.g. "m-r16-3", "m-qf-1", "m-final"
  level: 1..5               // 1 = R32→R16 merge, 5 = Final (center)
  childA: Leaf | Match       // reference, not a copy
  childB: Leaf | Match
  winner: Team | null        // null until user (or known result) decides
  angle, radius: number      // computed position of this match's dot/circle
```

Build all 5 levels once at load time and keep this tree as the single source of truth. Every circle you render, every line you draw, and every click handler reads from / writes to this tree — never maintain a separate "selected flags" array that can drift out of sync with it.

### 2.1 Derived state per Match (compute on every render, don't store)
- `competitorA = childA.team ?? resolvedWinner(childA)` — the actual team occupying slot A, which is either the leaf's fixed team (level 1) or the winner of childA if childA is itself a Match.
- `competitorB` — same for slot B.
- `isLive` = `competitorA != null && competitorB != null && winner == null` → this is a match the user can currently click to decide.
- `isLocked` = either competitor is still `null` → render as the dashed/greyed placeholder circle seen in the reference screenshot; **not clickable**.
- `isDecided` = `winner != null`.

This derivation is what gives you "current match tracking" for free: at any moment, the set of `isLive` matches across the whole tree IS the set of matches the user can act on right now. Don't hardcode "round 1 first, then round 2" — just recompute `isLive` after every state change and let it naturally move forward.

---

## 3. Interaction rules (implement exactly this state machine)

### 3.1 Picking a winner
- User clicks one of the two competitor circles inside an `isLive` match.
- Set `match.winner = clickedTeam`.
- That's it for this step — do **not** immediately also set anything on the parent match. The parent match becomes `isLive` automatically next render because its `competitorA/B` derivation now resolves through this match's new `winner`.

### 3.2 Undo (clicking the greyed-out/losing flag)
- Every `isDecided` match still renders **both** original competitor circles at their current animated positions: the winner highlighted/solid at the match's dot position, the loser shown small and greyed-out/desaturated near the same junction (this matches the reference screenshot's faded losing-flag treatment).
- Clicking the greyed-out loser circle of a decided match:
  - Sets `match.winner = thatTeam` (i.e., simply re-decide the match — this naturally flips which one is highlighted and which is greyed).
- Clicking the *currently-winning* circle when you want to fully revert to "undecided" should also be supported: provide a clear way to reset a single match (e.g., second click on the already-selected winner sets `match.winner = null` again). Either behavior (flip vs. clear) must trigger 3.3 below.

### 3.3 Cascading invalidation (critical — do not skip)
Whenever `match.winner` changes (set, flipped, or cleared) for any match:
- Recursively clear `winner = null` on **every ancestor match** of this match (i.e., every Match whose `competitorA/B` was derived from this one), all the way up to the Final, **except** ancestors are not "cleared" directly — they simply become re-derived as `isLocked` again automatically once any leaf input changes, UNLESS their own winner was an independent manual pick that's now invalid.
- Concretely: write a function `invalidateDownstream(changedMatch)` that walks **up** the tree from `changedMatch` to the root (Final) and explicitly sets `winner = null` on every Match it passes through. This guarantees you never have a "stale" winner sitting in round 3 that no longer matches what's coming out of round 2.
- After invalidation, re-render. Matches that are now missing a competitor go back to `isLocked` (placeholder/dashed). Matches that still have both competitors resolved stay `isLive` or `isDecided` as appropriate.

### 3.4 Crowning the champion
- The root Match (`level 5`, the Final) behaves identically to any other match — when the user clicks its winner, set `winner` on it. Render a "Champion" label + emphasized circle/trophy treatment at the center once `root.winner != null`.

### 3.5 Reset button
- Walk the entire tree and set `winner = null` on every Match node. Re-render. (Leaves with fixed/known teams are untouched — only predictions reset, not the known Round-of-32 lineup.)

---

## 4. Path-based movement animation (this is the part most likely to be implemented wrong — read carefully)

**Requirement:** when a match is decided, the winning flag circle must visually travel from its **current on-screen position** to the **match's junction/dot position**, sliding *along the same connector line/path that is already drawn on screen between those two points* — not a straight-line tween between arbitrary coordinates, and not an instant repaint.

Implementation approach (SVG, required because the bracket lines are already SVG paths):

1. **Each connector must be a real `<path>` element with a `d` attribute and an `id`**, e.g. `<path id="conn-leaf-0-to-m-r16-0" d="M x1 y1 L ex ey L x2 y2" />` (the elbow path already used to draw the bracket lines). Do not draw connectors as two separate disconnected `<line>` elements — they must be a single continuous path so it can be used as a motion path.
2. When `match.winner` is set and the winning competitor came from `childA` (or `childB`), find that specific connector path (`childA → match` or `childB → match`).
3. Animate the flag circle along that exact path using one of:
   - **Preferred:** CSS `offset-path: path("…")` + `offset-distance` animated from `0%` to `100%` (use the same `d` string as the connector). This is the simplest correct approach and works for an HTML `<div>` circle overlaying the SVG.
   - **Alternative:** if circles are themselves SVG elements (`<circle>` or `<g>`), use SMIL `<animateMotion>` with `<mpath xlink:href="#conn-...">`, or in React/JS, sample points along the path with `pathElement.getPointAtLength(t * pathElement.getTotalLength())` on each animation frame and set the circle's `cx/cy` (or `transform: translate(x,y)`) accordingly — this is the most robust cross-browser option and is what to use if `offset-path` support is a concern.
4. Animation duration: ~450–600ms, ease-in-out. While animating, the circle currently at the *origin* slot should visually disappear/fade only once the moving clone reaches the destination (or use a single circle instance that is reparented and animated — do not show two overlapping copies the whole time).
5. **Reverse case (undo/flip):** if a winner is undone, animate it back along the same path in reverse (100% → 0%) to its origin slot, then re-show the other competitor at the junction as appropriate. Don't just snap.
6. **Multi-level cascade:** if a user changes an early-round pick that invalidates several rounds above it (per §3.3), only animate the directly affected pieces — the now-invalidated upstream matches should simply fade their stale winner circle back to "locked/placeholder" state (no path animation needed for invalidation, only for new winner advancement).

---

## 5. Visual states to support (per reference screenshot)

- **Fixed/known leaf team:** full-color circular flag image, ~40–44px.
- **TBD/locked leaf (playoff slot not yet resolved):** two overlapping dark grey/black circles with no flag (placeholder), not clickable.
- **Locked match (round not reachable yet):** render as a dashed-border empty circle at the junction — not clickable, no flag shown.
- **Live match (clickable):** both competitor circles shown at full color/opacity at their current positions; hovering shows a pointer cursor + slight scale-up.
- **Decided match:** winner circle shown solid/highlighted (subtle ring or shadow) at the junction position after animating in; loser circle shown small + desaturated/greyed near the same junction, still clickable (to undo per §3.2).
- **Final/champion junction:** the two semifinal-winner dots get an accent color (amber/orange, per reference) to visually distinguish them as feeding the Final, even before the Final is decided.
- **Connector line state:** dim grey by default; the segment(s) feeding a decided match render slightly brighter/thicker to show the "active path" taken by the surviving team — this should literally be the same path object used for the animation in §4, just with a class/style toggle, e.g. `.connector.active { stroke: #9a9aa2; stroke-width: 1.6; }`.

---

## 6. Acceptance checklist (verify all of these before considering it done)

- [ ] Clicking a team in any currently-live match sets it as that match's winner and the parent match becomes live/playable if its other side is already resolved.
- [ ] The winning flag visibly slides along the drawn connector path to the junction dot — never teleports.
- [ ] Clicking the greyed-out loser of a decided match flips the result, and the new winner animates in from its own origin along its own connector.
- [ ] Changing an early-round result automatically clears every dependent prediction above it in the tree (no stale/inconsistent winners anywhere).
- [ ] The set of clickable matches always exactly equals "matches where both competitors are currently resolved and no winner chosen yet" — recomputed live, never hardcoded by round number.
- [ ] TBD/playoff leaves and locked future rounds render as non-clickable placeholders (dashed/grey), matching the reference screenshot.
- [ ] Reset clears all predictions (not the fixed Round-of-32 lineup) and returns every junction to its locked/placeholder state.
- [ ] Deciding the Final shows a clear "Champion" state at the center.
