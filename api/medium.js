export default async function handler(req, res) {
  try {
    const response = await fetch("https://medium.com/feed/@sujaybuilds");
    const xml = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(xml);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Medium feed" });
  }
}