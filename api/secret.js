export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || 'Unknown';
  const time = new Date().toLocaleString("en-NP", {timeZone: "Asia/Kathmandu"});
  const ua = req.headers['user-agent'] || 'No UA';
  try {
    await fetch("https://formsubmit.co/ajax/sc240510@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        name: "Visitor Alert",
        subject: `NEW VISITOR IP: ${ip}`,
        message: `IP: ${ip}\nTime: ${time}\nBrowser: ${ua}\nPage: /api/secret`
      })
    });
  } catch(e){}
  res.status(200).json({ ok: true, ip, time });
}
