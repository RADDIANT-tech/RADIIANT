import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 3001;

// Replace this with your actual deployed Apps Script URL
const scriptURL = "http://localhost:3001/submit";

app.use(cors());
app.use(express.json());

app.post("/submit", async (req, res) => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    console.log("✅ Forwarded to Google Sheets:", text);
    res.status(200).send(text);
  } catch (error) {
    console.error("❌ Error forwarding to Google Sheets:", error);
    res.status(500).send("Submission failed.");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy server running at http://localhost:${PORT}`);
});
