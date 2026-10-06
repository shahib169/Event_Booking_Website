const functions = require("firebase-functions");
const { fetch } = require("undici");
const cors = require("cors")({ origin: true }); // use CORS middleware

const apiKey = "dojeaFaTHVOWAk2owQzuiElRVjpdUQiT";

exports.getEvents = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const city = req.query.city || "London";

    try {
      const allEvents = [];

      for (let page = 0; page < 3; page++) {
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?city=${encodeURIComponent(city)}&countryCode=GB&size=100&page=${page}&apikey=${apiKey}`;
        console.log("➡️ Fetching Ticketmaster URL:", url);

        const response = await fetch(url);
        const data = await response.json();

        console.log("📥 Status:", response.status);
        if (!response.ok) {
          console.log("Full Ticketmaster error:", JSON.stringify(data, null, 2));
          return res.status(500).json({ error: "Ticketmaster API failed", message: data });
        }

        const events = data._embedded?.events || [];
        if (events.length === 0) break;

        allEvents.push(...events);
      }

      return res.status(200).json({ _embedded: { events: allEvents } });

    } catch (err) {
      console.error("🔥 Fetch failed:", err);
      return res.status(500).json({
        error: "Function crashed",
        message: err.message,
        stack: err.stack
      });
    }
  });
});

