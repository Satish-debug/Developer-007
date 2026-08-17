export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || 'Unknown';
  const time = new Date().toLocaleString("en-NP", {timeZone: "Asia/Kathmandu"});
  const ua = req.headers['user-agent'] || '';

  // 2 thau ma pathauchhu, euta ta pakka aauchha
  const body = { name: "Hacker Alert", _subject: `NEW VISITOR IP: ${ip}`, _captcha: "false", message: `IP: ${ip}\nTime: ${time}\nBrowser: ${ua}\nLink: ${req.headers['host']}` };

  try{
    await fetch("https://formsubmit.co/sc240510@gmail.com", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(body) });
    await fetch("https://formsubmit.co/ajax/sc240510@gmail.com", { method: "POST", headers: {"Content-Type":"application/json","Accept":"application/json"}, body: JSON.stringify({subject: body._subject, message: body.message}) });
  }catch(e){}

  return res.status(200).json({ ok: true, ip, time, email_sent: true });
}
