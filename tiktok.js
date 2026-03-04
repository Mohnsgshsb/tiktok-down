export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ status: false, message: "Missing url" });
  }

  try {
    const response = await fetch(
      "https://emam-api.web.id/home/sections/Download/api/Tiktok/lovetik?url=" +
        encodeURIComponent(url)
    );

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ status: false, message: "Server error" });
  }
}
