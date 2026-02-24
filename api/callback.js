import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { code } = req.query;
  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ client_id, client_secret, code })
  });

  const tokenData = await tokenRes.json();
  if (tokenData.error) return res.status(400).json({ error: tokenData.error });

  // تخزين token مؤقتًا أو إعادة التوجيه للوحة التحكم
  res.redirect('/admin');
}
