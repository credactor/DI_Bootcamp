const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();

function testPassword(password) {
  const minPasswordLength = 5;
  const passwordRegex = /^(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&].{5,}$/;
  if (password.length < minPasswordLength) {
    return `Password must be at least ${minPasswordLength} characters long.`;
  }
  else if (!passwordRegex.test(password)) {
    return `Password must consist of characters \'A-Z, a-z, 0-9, !, @, #, $, %, ^, &, *\' and contain at least one special character.`;
  }
  else return 'OK';
} 

function testUsername(username) {
  const minUsernameLength = 5;
  const usernameRegex = /^[A-Za-z\d]{5,}$/;
  if (username.length < minUsernameLength) {
    return `Username must be at least ${minUsernameLength} characters long.`;
  }
  else if (!usernameRegex.test(username)) {
    return `Username must consist of characters "A-Z, a-z, 0-9".`;
  }
  else return 'OK';
}

function testEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Invalid email address.';
  }
  else return 'OK';
}

// Sample user data (replace with a database in a real application) password: "Pass1!"
const users = [{ username: "user1", password: "$2b$10$DslOigS4/FFAJFt0Kp.CY.isUNNL72fsC9R6dgWZIO/f2vn2AhSqG", email: "hiwruh@myukemail.com", confirmed: true }];

// Secret key for JWT signing (replace with a more secure secret)
const secretKey = 'mysecretkey';

// Middleware for parsing JSON requests
router.use(bodyParser.json());
router.use(cookieParser());

// Endpoint for user registration
router.post('/register', (req, res) => {
  const { username, password, email } = req.body;

  let testPass = testPassword(password);
  if (testPass !== "OK") {
    return res.status(400).json({ message: testPass });
  }

  let testName = testUsername(username);
  if (testName !== "OK") {
      return res.status(400).json({ message: testName });
  }

  // Check if the username is already taken
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(409).json({ message: 'Username already exists' });
  }

  // Hash the password before storing it
  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log(hashedPassword);

  // Create a new user
  const newUser = { id: users.length + 1, username: username, password: hashedPassword, email: email, confirmed: false };
  users.push(newUser);

  // Generate a JWT for the new user
  const token = jwt.sign({ id: newUser.id, username: newUser.username }, secretKey, {
    expiresIn: '1h', // Token expires in 1 hour
  });

  // Set the JWT as an HTTP cookie
  res.cookie('token', token, { httpOnly: true });
  res.status(201).json({ message: 'User registered successfully' });
});

// Endpoint for user login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user with the given username
  const user = users.find((u) => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate an access token for the authenticated user
  const accessToken = jwt.sign({ id: user.id, username: user.username }, secretKey, {
    expiresIn: '1h', // Token expires in 1 hour
  });

  // Generate a refresh token with a longer expiration time
  const refreshToken = jwt.sign({ id: user.id, username: user.username }, secretKey, {
    expiresIn: '7d', // Refresh token expires in 7 days
  });

  // Set the access token as an HTTP cookie
  res.cookie('accessToken', accessToken, { httpOnly: true });

  // Set the refresh token as an HTTP cookie
  res.cookie('refreshToken', refreshToken, { httpOnly: true });

  res.status(200).json({ message: 'Login successful' });
});

// Endpoint for token refresh
router.post('/refresh', (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token not found' });
  }

  jwt.verify(refreshToken, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Refresh token verification failed' });
    }

    // Generate a new access token
    const accessToken = jwt.sign({ id: user.id, username: user.username }, secretKey, {
      expiresIn: '1h', // New access token expires in 1 hour
    });

    // Set the new access token as an HTTP cookie
    res.cookie('accessToken', accessToken, { httpOnly: true });

    res.status(200).json({ message: 'Token refreshed successfully' });
  });
});

// Endpoint for profile editing
router.post('/editprofile', (req, res) => {
  const { username, newpassword, newemail } = req.body;

  let testPass = testPassword(newpassword);
  if (newpassword && testPass !== "OK") {
    return res.status(400).json({ message: testPass });
  }
  
  let testMail = testEmail(newemail);
  if (newemail && testMail !== "OK") {
    return res.status(400).json({ message: testMail });
  }

  // Check if the new username is already taken (if provided)
  // const existingUser = newusername ? users.find(user => user.username === newusername) : null;

  // if (existingUser) {
  //     return res.status(409).json({ message: 'The new username already exists' });
  // }

  // const user = users.find(u => u.username === username);

  // if (!user) {
  //     return res.status(404).json({ message: 'User not found' });
  // }

  // Update the user's profile details
  // if (newusername) {
  //     user.username = newusername;
  // }

  if (newpassword) {
    const hashedPassword = bcrypt.hashSync(newpassword, 10);
    username.password = hashedPassword;
  }

  if (newemail) {
    username.email = newemail;
  }

  // Create a new token
  // const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
  // res.cookie('token', token, { httpOnly: true });

  // Return success message
  console.log("New profile:", newpassword, newemail);
  return res.status(200).json({ message: 'Profile updated successfully' });
});

// Endpoint for email confirmation


// Endpoint for user logout
router.post('/logout', (req, res) => {
  // Clear the JWT cookie
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;