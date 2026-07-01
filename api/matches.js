export default async function handler(req, res) {
  try {
    const apiKey = process.env.VITE_FOOTBALL_DATA_API_KEY || process.env.FOOTBALL_DATA_API_KEY;
    console.log(`[matches.js] VITE_FOOTBALL_DATA_API_KEY is ${apiKey ? 'defined and non-empty' : 'MISSING'}`);
    
    if (!apiKey) {
      return res.status(500).json({ error: "Missing API key" });
    }

    const fetchUrl = 'https://api.football-data.org/v4/competitions/2000/matches?stage=LAST_32';
    console.log(`[matches.js] Fetching upstream URL: ${fetchUrl}`);

    const response = await fetch(fetchUrl, {
      headers: {
        'X-Auth-Token': apiKey,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: "Upstream API error", details: errorText });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("API Proxy Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
