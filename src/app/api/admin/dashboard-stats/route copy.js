export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // Replace this with real user validation logic (e.g. check DB)
  if (email === 'user@example.com' && password === 'password123') {
    // Return fake token or user data
    return res.status(200).json({ token: 'fake-jwt-token' });
  }

  return res.status(401).json({ message: 'Invalid email or password' });
}
