// callback.js
const fetch = require('node-fetch');

module.exports = async function handler(req, res) {
  const { code } = req.query;
  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ client_id, client_secret, code })
    });

    const tokenData = await tokenRes.json();
    if (tokenData.error) return res.status(400).json({ error: tokenData.error });

    // إعادة التوجيه إلى لوحة التحكم بعد تسجيل الدخول
    res.redirect('/admin');
  } catch (err) {
    console.error(err);
    res.status(500).send('خطأ في الخادم الداخلي');
  }
};
