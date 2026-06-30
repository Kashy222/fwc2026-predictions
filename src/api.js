// api.js
// In a real scenario, this would query FotMob via the proxy.
// Since the 2026 World Cup hasn't happened yet and FotMob won't have the data,
// we'll mock the progression of the tournament to showcase the feature perfectly.

let mockMatchState = {};
let currentRound = 1;
let currentMatch = 0;

export async function getLiveMatches() {
  try {
    // Attempt to fetch from fotmob (will likely return nothing for 2026 WC right now)
    // const res = await fetch('/api/fotmob/leagues?id=77&tab=matches&type=league');
    // const data = await res.json();
    
    // So we use our live simulation logic:
    // Every 5 seconds, a new match is decided, advancing a team.
    const TEAMS = [
        "se", "de", "py", "br", "jp", "ie", "no", "mx", 
        "ec", "gb-eng", "cd", "ar", "cv", "au", "eg", "ch", 
        "dz", "co", "gh", "sn", "be", "us", "ba", "es", 
        "at", "pt", "hr", "nl", "ma", "za", "fr", "it"
    ];

    if (currentRound <= 5) {
        const numMatches = 32 / Math.pow(2, currentRound);
        if (currentMatch < numMatches) {
            // Pick a winner between the two children
            const child1Id = `${currentRound - 1}-${currentMatch * 2}`;
            const child2Id = `${currentRound - 1}-${currentMatch * 2 + 1}`;
            
            // Get the teams at the child nodes
            const team1 = currentRound === 1 ? TEAMS[currentMatch * 2] : mockMatchState[child1Id];
            const team2 = currentRound === 1 ? TEAMS[currentMatch * 2 + 1] : mockMatchState[child2Id];
            
            // Randomly select a winner
            const winner = Math.random() > 0.5 ? team1 : team2;
            mockMatchState[`${currentRound}-${currentMatch}`] = winner;
            
            currentMatch++;
        } else {
            currentRound++;
            currentMatch = 0;
        }
    }

    return { matches: { ...mockMatchState }, teams: TEAMS };
  } catch(e) {
    console.error("Failed to fetch live matches", e);
    return null;
  }
}
