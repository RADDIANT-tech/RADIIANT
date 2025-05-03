export const config = {
    api: {
      bodyParser: {
        sizeLimit: '1mb',
      },
    },
  };
  
  export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw1tG-XITxvHcVO-l3Ib6dVex4SMUQxnRnO_AA2A0UGbCLQdovHstMn-FrU1Z-FoOxf/exec"; 
  
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });
  
      const result = await response.text();
      return res.status(200).send(result);
    } catch (error) {
      console.error("❌ Failed to submit contact message:", error);
      return res.status(500).json({ error: "Failed to send contact message" });
    }
  }
  