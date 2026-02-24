// /api/auth.js
export default function handler(req, res) {
  const redirect = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=https://nyk-construction.vercel.app/api/callback&scope=repo`;

  res.redirect(redirect);
}
