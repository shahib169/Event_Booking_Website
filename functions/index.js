const functions = require("firebase-functions");
const { fetch } = require("undici"); // ✅ native fetch compatibility for Node 18+

const apiKey = "dojeaFaTHVOWAk2owQzuiElRVjpdUQiT";

exports.getEvents = functions.https.onRequest(async (req, res) => {
  const city = req.query.city || "London";
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?city=${encodeURIComponent(city)}&countryCode=GB&size=12&apikey=${apiKey}`;

  try {
    console.log("➡️ Fetching Ticketmaster URL:", url);

    const response = await fetch(url);
    const data = await response.json();

    console.log("📥 Status:", response.status);
    console.log("📄 Response:", JSON.stringify(data, null, 2));

    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    if (!response.ok) {
      console.log("Full Ticketmaster error:", JSON.stringify(data, null, 2));
      return res.status(500).json({ error: "Ticketmaster API failed", message: data });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("🔥 Fetch failed:", err);

    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    return res.status(500).json({
      error: "Function crashed",
      message: err.message,
      stack: err.stack
    });
  }
})
