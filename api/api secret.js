export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown';
  const ua = req.headers['user-agent'] || 'Unknown Device';
  const time = new Date().toLocaleString("en-NP", {timeZone: "Asia/Kathmandu"});

  // 1. Email ma pathaune - FREE service
  try {
    await fetch("https://formsubmit.co/ajax/sc240510@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject: `🎯 NEW VISITOR! IP: ${ip}`,
        message: `Kasaile timro site kholyo!\n\nIP: ${ip}\nDevice: ${ua}\nTime: ${time}\n\n- Developer 007 System`
      })
    });
  } catch(e) { console.log("email error", e) }

  res.status(200).json({ ok: true, ip });
}
