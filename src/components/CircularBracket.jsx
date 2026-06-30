import React, { useState, useMemo, useEffect, useRef, useLayoutEffect, useImperativeHandle, forwardRef } from 'react';
import { Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';
import '../App.css';

const TEAMS = [
  'gh', 'co', 'dz', 'ch', 'eg', 'au', 'cv', 'ar', 
  'cd', 'gb-eng', 'ec', 'mx', 'no', 'ci', 'jp', 'br',
  'sn', 'be', 'us', 'ba', 'at', 'es', 'hr', 'pt', 
  'ma', 'nl', 'ca', 'za', 'se', 'fr', 'py', 'de'
];

const S = [32, 16, 8, 4, 2, 1];
const BASE_ANGLES = [
  15 * Math.PI / 32, 13 * Math.PI / 32, 11 * Math.PI / 32, 9 * Math.PI / 32,
  7 * Math.PI / 32, 5 * Math.PI / 32, 3 * Math.PI / 32, 1 * Math.PI / 32,
  -1 * Math.PI / 32, -3 * Math.PI / 32, -5 * Math.PI / 32, -7 * Math.PI / 32,
  -9 * Math.PI / 32, -11 * Math.PI / 32, -13 * Math.PI / 32, -15 * Math.PI / 32,
  17 * Math.PI / 32, 19 * Math.PI / 32, 21 * Math.PI / 32, 23 * Math.PI / 32,
  25 * Math.PI / 32, 27 * Math.PI / 32, 29 * Math.PI / 32, 31 * Math.PI / 32,
  -31 * Math.PI / 32, -29 * Math.PI / 32, -27 * Math.PI / 32, -25 * Math.PI / 32,
  -23 * Math.PI / 32, -21 * Math.PI / 32, -19 * Math.PI / 32, -17 * Math.PI / 32
];

const NODE_RADII = [50, 32.78, 24.21, 16.12, 8.5];
const LINE_START_RADII = [50, 41.82, 32.78, 24.21, 16.12];
const ARC_RADII = [41.82, 32.78, 24.21, 16.12, 8.5];

function getPoint(round, index, radius) {
  const leavesPerNode = Math.pow(2, round);
  const firstLeafIndex = index * leavesPerNode;
  const lastLeafIndex = firstLeafIndex + leavesPerNode - 1;
  const a1 = BASE_ANGLES[firstLeafIndex];
  const a2 = BASE_ANGLES[lastLeafIndex];
  
  let avgAngle;
  if (Math.abs(a1 - a2) > Math.PI) {
     const a1Pos = a1 < 0 ? a1 + 2 * Math.PI : a1;
     const a2Pos = a2 < 0 ? a2 + 2 * Math.PI : a2;
     avgAngle = (a1Pos + a2Pos) / 2;
  } else {
     avgAngle = (a1 + a2) / 2;
  }

  return {
    x: 50 + radius * Math.cos(avgAngle),
    y: 50 + radius * Math.sin(avgAngle),
    angle: avgAngle
  };
}

function getFlagUrl(code) {
  if (!code) return '';
  // Use flag-icon-css 1x1 flags for full detail, preserving crests while avoiding circular crop issues
  return `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.5/flags/1x1/${code}.svg`;
}

const getTeamName = (code) => {
  if (code === 'gb-eng') return 'England';
  if (code === 'gb-wls') return 'Wales';
  const name = new Intl.DisplayNames(['en'], { type: 'region' }).of(code.toUpperCase());
  return name || code.toUpperCase();
};

const getTeamAbbr = (code) => {
  const map = {
    'ar': 'ARG', 'au': 'AUS', 'at': 'AUT', 'be': 'BEL', 'ba': 'BIH',
    'br': 'BRA', 'ca': 'CAN', 'cv': 'CPV', 'co': 'COL', 'hr': 'CRO',
    'cd': 'COD', 'ec': 'ECU', 'eg': 'EGY', 'gb-eng': 'ENG', 'fr': 'FRA',
    'de': 'GER', 'gh': 'GHA', 'ma': 'MAR', 'mx': 'MEX', 'nl': 'NED',
    'py': 'PAR', 'pt': 'POR', 'sn': 'SEN', 'za': 'RSA', 'es': 'ESP',
    'se': 'SWE', 'ch': 'SUI', 'us': 'USA', 'ci': 'CIV', 'jp': 'JPN',
    'no': 'NOR', 'dz': 'ALG'
  };
  return map[code] || code.toUpperCase().substring(0, 3);
};

const TEAM_COLORS = {
  'ar': ['#75AADB', '#FFFFFF', '#F6B40E'],
  'au': ['#00008B', '#FFFFFF', '#FF0000'],
  'at': ['#ED2939', '#FFFFFF'],
  'be': ['#000000', '#FDDA24', '#EF3340'],
  'ba': ['#002395', '#FFFFFF', '#FECB00'],
  'br': ['#009c3b', '#ffdf00', '#002776', '#ffffff'],
  'ca': ['#FF0000', '#FFFFFF'],
  'cv': ['#003893', '#FFFFFF', '#CF2027', '#F7D116'],
  'co': ['#FCD116', '#003893', '#CE1126'],
  'hr': ['#FF0000', '#FFFFFF', '#0000FF'],
  'cd': ['#007FFF', '#CE1021', '#F7D618'],
  'ec': ['#FFDD00', '#034EA2', '#ED1C24'],
  'eg': ['#CE1126', '#FFFFFF', '#000000', '#C09300'],
  'gb-eng': ['#FFFFFF', '#CE1124'],
  'fr': ['#002395', '#FFFFFF', '#ED2939'],
  'de': ['#000000', '#DD0000', '#FFCE00'],
  'gh': ['#CE1126', '#FCD116', '#006B3F', '#000000'],
  'ma': ['#C1272D', '#006233'],
  'mx': ['#006847', '#FFFFFF', '#CE1126'],
  'nl': ['#AE1C28', '#FFFFFF', '#21468B'],
  'py': ['#D52B1E', '#FFFFFF', '#0038A8'],
  'pt': ['#046A38', '#DA291C', '#F1B434'],
  'sn': ['#00853F', '#FDEF42', '#E31B23'],
  'za': ['#007749', '#FFFFFF', '#001489', '#FFB81C', '#E03C31', '#000000'],
  'es': ['#AA151B', '#F1BF00'],
  'se': ['#006AA7', '#FECC00'],
  'ch': ['#FF0000', '#FFFFFF'],
  'us': ['#B22234', '#FFFFFF', '#3C3B6E']
};

const TEAM_RANK_POINTS = {
  'ar': 1855, 'fr': 1845, 'be': 1798, 'br': 1791, 'gb-eng': 1794,
  'pt': 1748, 'nl': 1745, 'es': 1732, 'hr': 1721, 'co': 1722,
  'us': 1676, 'ma': 1669, 'ch': 1653, 'de': 1644, 'mx': 1636,
  'jp': 1621, 'sn': 1622, 'dz': 1475, 'eg': 1492, 'au': 1461,
  'ca': 1460, 'cv': 1320, 'cd': 1300, 'ec': 1515, 'gh': 1380,
  'za': 1395, 'ba': 1335, 'at': 1550, 'py': 1450, 'se': 1530
};

const pickWinner = (teamA, teamB, mode) => {
    const pA = TEAM_RANK_POINTS[teamA] || 1500;
    const pB = TEAM_RANK_POINTS[teamB] || 1500;
    
    const isAStronger = pA >= pB;
    const stronger = isAStronger ? teamA : teamB;
    const weaker = isAStronger ? teamB : teamA;
    const diff = Math.abs(pA - pB);
    
    let pStrongerWins = 1 / (1 + Math.pow(10, -diff / 400));
    
    if (mode === 'Safe') {
        pStrongerWins = 0.5 + (pStrongerWins - 0.5) * 1.6;
        pStrongerWins = Math.max(0.65, Math.min(0.97, pStrongerWins));
    } else if (mode === 'Differential') {
        pStrongerWins = 0.5 - (pStrongerWins - 0.5) * 0.8;
        pStrongerWins = Math.max(0.35, Math.min(0.5, pStrongerWins));
    } else {
        pStrongerWins = Math.max(0.55, Math.min(0.85, pStrongerWins));
    }
    
    return Math.random() < pStrongerWins ? stronger : weaker;
};

let confettiFrameId = null;

const fireConfetti = (teamCode) => {
    const colors = TEAM_COLORS[teamCode] || ['#ffffff', '#FFDF00'];
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 6,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.1 },
            colors: colors,
            zIndex: 1000
        });
        confetti({
            particleCount: 6,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.1 },
            colors: colors,
            zIndex: 1000
        });
        if (Date.now() < end) {
            confettiFrameId = requestAnimationFrame(frame);
        }
    }());
};

const stopConfetti = () => {
    if (confettiFrameId) {
        cancelAnimationFrame(confettiFrameId);
        confettiFrameId = null;
    }
    confetti.reset();
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const CircularBracket = forwardRef((props, ref) => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [updateTick, setUpdateTick] = useState(0);
  
  const autoPredictRunning = useRef(false);

  useEffect(() => {
    if (props.initialAutoPredict) {
        setTimeout(() => {
            handleAutoPredict(props.initialAutoPredict);
        }, 150);
    }
    return () => {
        autoPredictRunning.current = false;
        stopConfetti();
    };
  }, []);

  const svgRef = useRef(null);
  const teamRefs = useRef({});
  const oldPositions = useRef({});

  const { root, leaves, matchesList, links, nodes } = useMemo(() => {
    const _leaves = TEAMS.map((team, idx) => ({ isLeaf: true, team, index: idx }));
    let prevRound = _leaves;
    const _matchesList = [];
    
    for (let r = 1; r <= 5; r++) {
       const currentRound = [];
       for (let i = 0; i < prevRound.length; i += 2) {
           const match = {
               isLeaf: false,
               round: r,
               index: i / 2,
               childA: prevRound[i],
               childB: prevRound[i + 1],
               winner: null,
               parent: null
           };
           prevRound[i].parent = match;
           prevRound[i + 1].parent = match;
           currentRound.push(match);
           _matchesList.push(match);
       }
       prevRound = currentRound;
    }
    
    if (props.sharedWinners && props.sharedWinners.length === 31) {
        _matchesList.forEach((match, i) => {
            match.winner = props.sharedWinners[i] || null;
        });
    }
    
    const _root = prevRound[0];

    const calculatedLinks = [];
    const calculatedNodes = [];

    for (let r = 0; r <= 5; r++) {
      const numNodes = S[r] || 1;
      for (let i = 0; i < numNodes; i++) {
        const pt = r === 5 ? { x: 50, y: 50 } : getPoint(r, i, NODE_RADII[r]);
        calculatedNodes.push({ id: `node-${r}-${i}`, round: r, index: i, x: pt.x, y: pt.y });
      }
    }

    for (let r = 0; r < 5; r++) {
      const numParents = S[r + 1];
      for (let i = 0; i < numParents; i++) {
        const c1Index = i * 2;
        const c2Index = i * 2 + 1;
        
        const pt1Start = getPoint(r, c1Index, NODE_RADII[r]);
        const pt1End = getPoint(r, c1Index, ARC_RADII[r]);
        const pt2Start = getPoint(r, c2Index, NODE_RADII[r]);
        const pt2End = getPoint(r, c2Index, ARC_RADII[r]);
        
        if (r === 4) {
           calculatedLinks.push({ id: `path-${r}-${c1Index}`, d: `M ${pt1Start.x} ${pt1Start.y} L 50 50`, hidden: true });
           calculatedLinks.push({ id: `path-${r}-${c2Index}`, d: `M ${pt2Start.x} ${pt2Start.y} L 50 50`, hidden: true });
           continue;
        }

        const ptParentArc = getPoint(r + 1, i, ARC_RADII[r]);
        const ptParentEnd = getPoint(r + 1, i, NODE_RADII[r + 1]);

        let diff1 = ptParentArc.angle - pt1End.angle;
        while (diff1 > Math.PI) diff1 -= 2 * Math.PI;
        while (diff1 < -Math.PI) diff1 += 2 * Math.PI;
        let sweep1 = diff1 > 0 ? 1 : 0;
        const d1 = `M ${pt1Start.x} ${pt1Start.y} L ${pt1End.x} ${pt1End.y} A ${ARC_RADII[r]} ${ARC_RADII[r]} 0 0 ${sweep1} ${ptParentArc.x} ${ptParentArc.y} L ${ptParentEnd.x} ${ptParentEnd.y}`;
        calculatedLinks.push({ id: `path-${r}-${c1Index}`, d: d1 });

        let diff2 = ptParentArc.angle - pt2End.angle;
        while (diff2 > Math.PI) diff2 -= 2 * Math.PI;
        while (diff2 < -Math.PI) diff2 += 2 * Math.PI;
        let sweep2 = diff2 > 0 ? 1 : 0;
        const d2 = `M ${pt2Start.x} ${pt2Start.y} L ${pt2End.x} ${pt2End.y} A ${ARC_RADII[r]} ${ARC_RADII[r]} 0 0 ${sweep2} ${ptParentArc.x} ${ptParentArc.y} L ${ptParentEnd.x} ${ptParentEnd.y}`;
        calculatedLinks.push({ id: `path-${r}-${c2Index}`, d: d2 });
      }
    }

    return { root: _root, leaves: _leaves, matchesList: _matchesList, links: calculatedLinks, nodes: calculatedNodes };
  }, []);

  const getCompetitor = (matchOrLeaf) => {
    if (matchOrLeaf.isLeaf) return matchOrLeaf.team;
    return matchOrLeaf.winner;
  };

  const teamPositions = useMemo(() => {
    return leaves.map((leaf) => {
       let node = leaf;
       let r = 0;
       let isDefeated = false;
       
       let lostTo = null;

       let isChampion = false;
       let isRunnerUp = false;
       
       let displayNode = leaf;
       let displayR = 0;
       
       let lastWonMatch = null;
       let lostMatch = null;

       while (node.parent) {
           const match = node.parent;
           if (match.winner === leaf.team) {
               node = match;
               r = match.round;
               lastWonMatch = match;
               if (r === 5) {
                   isChampion = true;
               } else {
                   displayNode = node;
                   displayR = r;
               }
           } else if (match.winner) {
               isDefeated = true;
               lostTo = match.winner;
               lostMatch = match;
               if (r === 4) {
                   isRunnerUp = true;
               }
               break;
           } else {
               break;
           }
       }
       
       let isClickable = false;
       let nextMatch = null;
       if (!isDefeated && node.parent) {
           nextMatch = node.parent;
           const teamA = getCompetitor(nextMatch.childA);
           const teamB = getCompetitor(nextMatch.childB);
           if (teamA && teamB && !nextMatch.winner) {
               isClickable = true;
           }
       }
       
       let isRevertable = false;
       if (lastWonMatch && !lastWonMatch.isRealResult) {
           isRevertable = true;
       }
       
       let isSwappable = false;
       if (isDefeated && lostMatch && !lostMatch.isRealResult) {
           isSwappable = true;
       }
       
       const pt = getPoint(displayR, displayNode.index, NODE_RADII[displayR]);
       
       return {
          team: leaf.team,
          r: displayR,
          idx: displayNode.index,
          x: pt.x,
          y: pt.y,
          isDefeated,
          isClickable,
          nextMatch,
          lostTo,
          isChampion,
          isRunnerUp,
          lastWonMatch,
          lostMatch,
          isRevertable,
          isSwappable
       };
    });
  }, [leaves, updateTick]); 

  useLayoutEffect(() => {
    teamPositions.forEach(tp => {
        const el = teamRefs.current[tp.team];
        if (!el) return;
        
        const old = oldPositions.current[tp.team];
        if (!old) {
            el.style.left = `${tp.x}%`;
            el.style.top = `${tp.y}%`;
            oldPositions.current[tp.team] = { r: tp.r, idx: tp.idx, x: tp.x, y: tp.y };
            return;
        }

        if (old.r < tp.r) {
            if (tp.r - old.r === 1) {
                const pathId = `path-${old.r}-${old.idx}`;
                const pathEl = svgRef.current?.querySelector(`#${pathId}`);
                if (pathEl) {
                    const totalLength = pathEl.getTotalLength();
                    let start = performance.now();
                    const duration = 800; // Slower, more elegant travel
                    
                    const animate = (now) => {
                        let progress = (now - start) / duration;
                        if (progress > 1) progress = 1;
                        // easeInOutCubic for a much smoother, premium feel
                        const ease = progress < 0.5 
                            ? 4 * progress * progress * progress 
                            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                        
                        const pt = pathEl.getPointAtLength(ease * totalLength);
                        el.style.left = `${pt.x}%`;
                        el.style.top = `${pt.y}%`;
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };
                    requestAnimationFrame(animate);
                } else {
                    el.style.left = `${tp.x}%`;
                    el.style.top = `${tp.y}%`;
                }
            } else {
                // If it skipped rounds (e.g., initial load data), just snap
                el.style.left = `${tp.x}%`;
                el.style.top = `${tp.y}%`;
            }
        } else if (old.r > tp.r) {
            if (old.r - tp.r === 1) {
                const pathId = `path-${tp.r}-${tp.idx}`;
                const pathEl = svgRef.current?.querySelector(`#${pathId}`);
                if (pathEl) {
                    const totalLength = pathEl.getTotalLength();
                    let start = performance.now();
                    const duration = 800; // Slower, more elegant travel
                    
                    const animate = (now) => {
                        let progress = (now - start) / duration;
                        if (progress > 1) progress = 1;
                        
                        let revProgress = 1 - progress;
                        const ease = revProgress < 0.5 
                            ? 4 * revProgress * revProgress * revProgress 
                            : 1 - Math.pow(-2 * revProgress + 2, 3) / 2;
                        
                        const pt = pathEl.getPointAtLength(ease * totalLength);
                        el.style.left = `${pt.x}%`;
                        el.style.top = `${pt.y}%`;
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };
                    requestAnimationFrame(animate);
                } else {
                    el.style.left = `${tp.x}%`;
                    el.style.top = `${tp.y}%`;
                }
            } else {
                // Skipped multiple rounds backwards (e.g. cascading clears)
                el.style.left = `${tp.x}%`;
                el.style.top = `${tp.y}%`;
            }
        } else if (old.x !== tp.x || old.y !== tp.y) {
            // Unrelated coordinate jump
            el.style.left = `${tp.x}%`;
            el.style.top = `${tp.y}%`;
        }
        
        oldPositions.current[tp.team] = { r: tp.r, idx: tp.idx, x: tp.x, y: tp.y };
    });
  }, [teamPositions]);

  const handleTeamClick = (tp) => {
    if (props.readOnly) return;
    
    if (tp.isDefeated) {
        if (tp.isSwappable && tp.lostMatch) {
            tp.lostMatch.winner = tp.team;
            let p = tp.lostMatch.parent;
            while (p) { p.winner = null; p = p.parent; }
            if (tp.lostMatch.round === 5) {
                fireConfetti(tp.team);
            }
            setUpdateTick(t => t + 1);
        }
        return;
    }

    if (tp.isClickable && tp.nextMatch && !tp.nextMatch.isRealResult) {
        tp.nextMatch.winner = tp.team;
        let current = tp.nextMatch.parent;
        while (current) {
            current.winner = null;
            current = current.parent;
        }
        
        if (tp.nextMatch.round === 5) {
            fireConfetti(tp.team);
        }
        
        setUpdateTick(t => t + 1);
        return;
    }

    if (tp.isRevertable && tp.lastWonMatch) {
        tp.lastWonMatch.winner = null;
        let p = tp.lastWonMatch.parent;
        while (p) { p.winner = null; p = p.parent; }
        setUpdateTick(t => t + 1);
        return;
    }
  };

  const handleAutoPredict = async (mode = 'Average') => {
    if (autoPredictRunning.current) return;
    autoPredictRunning.current = true;

    for (let r = 1; r <= 5; r++) {
        const matchesInRound = matchesList.filter(m => m.round === r);
        for (const match of matchesInRound) {
            if (!autoPredictRunning.current) return;
            if (!match.winner) {
                const teamA = getCompetitor(match.childA);
                const teamB = getCompetitor(match.childB);
                if (teamA && teamB) {
                    match.winner = pickWinner(teamA, teamB, mode);
                    setUpdateTick(t => t + 1);
                    await sleep(250);
                }
            }
        }
    }
    
    const finalMatch = matchesList.find(m => m.round === 5);
    if (finalMatch && finalMatch.winner && !finalMatch.isRealResult && autoPredictRunning.current) {
         fireConfetti(finalMatch.winner);
    }
    
    autoPredictRunning.current = false;
  };

  useImperativeHandle(ref, () => ({
    autoPredict: handleAutoPredict,
    getMatchesList: () => matchesList,
    onPredictComplete: null // We will fire this manually if needed, or return a Promise from handleAutoPredict
  }));

  useEffect(() => {
    if (props.readOnly) return;
    
    const fetchResults = async () => {
      try {
        if (props.onFetchStateChange) props.onFetchStateChange(true);
        const res = await fetch('https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json');
        const data = await res.json();
        if (!data || !data.matches) return;
        
        const newlyCompleted = [];
        
        for (const m of data.matches) {
          if (m.score && m.score.ft) {
            const t1 = m.team1;
            const t2 = m.team2;
            
            for (const matchNode of matchesList) {
               const teamA = getCompetitor(matchNode.childA);
               const teamB = getCompetitor(matchNode.childB);
               
               if (teamA && teamB && !matchNode.winner) {
                  const nameA = getTeamName(teamA);
                  const nameB = getTeamName(teamB);
                  
                  if ((nameA === t1 && nameB === t2) || (nameA === t2 && nameB === t1)) {
                      let winnerName = null;
                      if (m.score.ft[0] > m.score.ft[1]) winnerName = m.team1;
                      else if (m.score.ft[1] > m.score.ft[0]) winnerName = m.team2;
                      else if (m.score.p) {
                         if (m.score.p[0] > m.score.p[1]) winnerName = m.team1;
                         else if (m.score.p[1] > m.score.p[0]) winnerName = m.team2;
                      }

                      let winningTeamCode = null;
                      if (winnerName === nameA) winningTeamCode = teamA;
                      else if (winnerName === nameB) winningTeamCode = teamB;
                      
                      if (winningTeamCode) {
                          const getMatchTimestamp = (matchObj) => {
                              if (!matchObj.time) return new Date(matchObj.date).getTime();
                              const timeStr = matchObj.time.replace('UTC', 'GMT');
                              return new Date(`${matchObj.date} ${timeStr}`).getTime();
                          };
                          newlyCompleted.push({
                              node: matchNode,
                              winner: winningTeamCode,
                              date: m.date,
                              timestamp: getMatchTimestamp(m),
                              teamA: nameA,
                              teamB: nameB,
                              codeA: teamA,
                              codeB: teamB
                          });
                      }
                  }
               }
            }
          }
        }
        
        if (newlyCompleted.length > 0) {
            let maxTimestamp = 0;
            let latestMatch = null;
            
            for (const update of newlyCompleted) {
                update.node.winner = update.winner;
                update.node.isRealResult = true;
                let p = update.node.parent;
                while (p) { p.winner = null; p = p.parent; }
                
                setUpdateTick(t => t + 1);
                
                if (update.timestamp > maxTimestamp) {
                    maxTimestamp = update.timestamp;
                    latestMatch = update;
                }
                
                await sleep(250);
            }
            
            if (latestMatch && props.onLastUpdated) {
                const d = new Date(latestMatch.date);
                const formattedDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                props.onLastUpdated({
                    teamA: getTeamAbbr(latestMatch.codeA),
                    teamB: getTeamAbbr(latestMatch.codeB),
                    date: formattedDate
                });
            }
        }
        
      } catch (err) {
        console.error("Failed to fetch worldcup.json", err);
      } finally {
        if (props.onFetchStateChange) props.onFetchStateChange(false);
      }
    };

    fetchResults();
    const interval = setInterval(fetchResults, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="circle-points">
        
        <svg ref={svgRef} className="circle-points__connector" viewBox="0 0 100 100" aria-hidden="true" style={{ position: 'absolute', width: '100%', height: '100%' }}>
          {links.map(link => (
            <path 
              key={link.id} 
              id={link.id} 
              d={link.d} 
              className="path-line" 
              fill="none" 
              style={link.hidden ? { stroke: 'transparent' } : {}} 
            />
          ))}
        </svg>

        <div className="circle-points__trophy" aria-hidden="true" style={{
          position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 0,
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
           <div style={{
               position: 'absolute',
               width: '140px',
               height: '140px',
               background: 'radial-gradient(circle, rgba(255, 215, 0, 0.5) 0%, rgba(255, 215, 0, 0) 70%)',
               filter: 'blur(12px)',
               zIndex: 0,
               pointerEvents: 'none'
           }} />
           <img alt="Trophy" src="/trophy.png" style={{ height: '110px', position: 'relative', zIndex: 1 }} />
        </div>


        {nodes.map(node => {
          if (node.round === 5) return null;
          return (
            <div
              key={node.id}
              className="circle-points__point"
              style={{ 
                position: 'absolute', 
                left: `${node.x}%`, 
                top: `${node.y}%`, 
                transform: 'translate(-50%, -50%)',
                zIndex: 1
              }}
            >
              <span className="circle-points__dot-marker" aria-hidden="true"></span>
            </div>
          );
        })}

        {teamPositions.map(tp => (
          <div
            key={tp.team}
            ref={el => teamRefs.current[tp.team] = el}
            className={`circle-points__point circle-points__point--team ${(tp.isClickable || tp.isRevertable || tp.isSwappable) ? 'clickable' : ''}`}
            style={{ 
              position: 'absolute', 
              transform: 'translate(-50%, -50%)',
              zIndex: hoveredNode === tp.team ? 100 : (tp.isDefeated ? 10 : 20),
              cursor: (tp.isClickable || tp.isRevertable || tp.isSwappable) ? 'pointer' : 'default'
            }}
            onMouseEnter={() => setHoveredNode(tp.team)}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => handleTeamClick(tp)}
          >
            <div className={`circle-points__flag-stack ${tp.isDefeated ? 'circle-points__flag-stack--inactive' : ''}`} style={{ position: 'relative' }}>
              <img 
                alt={getTeamName(tp.team)}
                className={`circle-points__flag ${tp.isDefeated ? 'loser-flag' : 'circle-points__flag--active'}`} 
                src={getFlagUrl(tp.team)} 
                draggable="false"
              />
            </div>
            {hoveredNode === tp.team && !tp.isDefeated && (
              <div className={`tooltip ${tp.x > 50 ? 'tooltip--left' : 'tooltip--right'}`}>
                {getTeamName(tp.team)}
              </div>
            )}
            {hoveredNode === tp.team && tp.isDefeated && tp.lostTo && (
              <div className={`tooltip tooltip-lost ${tp.x > 50 ? 'tooltip--left' : 'tooltip--right'}`}>
                {getTeamName(tp.team)} &ndash; lost to {getTeamName(tp.lostTo)}
              </div>
            )}
          </div>
        ))}
        

      </div>
    </div>
  );
});

export default CircularBracket;
