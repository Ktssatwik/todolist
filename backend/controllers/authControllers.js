const db = require('../db');

// Register a user
const registerUser = (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const checkQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(checkQuery, [email], (err, result) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (result.length > 0) return res.status(400).json({ error: 'User already exists' });

    const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(insertQuery, [username, email, password], (err, result) => {
      if (err) return res.status(500).json({ error: 'Error inserting user' });
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
};

// Login user
const loginUser = (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user: results[0] });
  });
};

module.exports = { registerUser, loginUser };
