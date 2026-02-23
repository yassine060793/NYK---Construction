export default function handler(req, res) {
  const client_id = process.env.GITHUB_CLIENT_ID;
  const redirect_uri = "https://nyk-construction.vercel.app/api/callback";
  
  const redirect = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=repo`;
  
  res.redirect(redirect);
}
