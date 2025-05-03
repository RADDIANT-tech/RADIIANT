export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};



export default async function handler(req, res) {
    if (req.method !== "POST") {
      console.log("📥 Incoming data:", req.body);

      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwm9ZPHvZSFD0Y_jf94k-eV8MIPFm8h064eDQCwtj48lvtqRx0GMNSJyVfkgRd21EPK/exec";
  
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });
  
      const text = await response.text();
      console.log("✅ Sent to Sheets:", text);
      return res.status(200).send(text);
    } catch (error) {
      console.error("❌ Failed to forward to Sheets:", error);
      return res.status(500).json({ error: "Failed to submit to Google Sheets" });
    }
  }
  