// A step-by-step checklist guide to JWT Authentication in Node.js with Express
// 1. Introduction to JSON Web Tokens (JWT)
//     Understand what a JSON Web Token (JWT) is and its components (header, payload, signature).
//     Know the typical use cases for JWTs in authentication and authorization.
// 2. Setting Up a Node.js and Express Application
//     Install Node.js and npm if not already installed.
//     Create a new project directory.
//     Initialize a new Node.js project with npm init -y.
//     Install Express using npm install express --save.
//     Create a basic Express application (e.g., app.js).
// 3. Installing Dependencies
//     Install necessary dependencies: jsonwebtoken, bcrypt, body-parser, and cookie-parser using npm.
//     Include these dependencies in your project and set up middleware as needed.
// 4. Creating User Authentication Endpoints
//     Create an router file to handle user registration and login routes.
//     Create your users data table.
//     Implement user registration with validation, password hashing, and JWT generation.
//     Implement user login with validation, password comparison, and JWT generation.
// 5. Generating JWTs
//     Generate JWTs in the /register and /login endpoints using jsonwebtoken.
//     Set JWT expiration times (e.g., 1 hour).
//     Set JWT secret key.
// 6. Implementing Middleware for Authentication
//     Create JWT authentication middleware file.
//     Implement middleware to verify the JWT in incoming requests.
//     Handle cases where JWT verification fails (e.g., return appropriate HTTP status codes).
// 7. Securing Routes with JWT Authentication
//     Define protected routes in your Express application.
//     Apply the JWT authentication middleware to these protected routes.
//     Ensure that only authenticated users can access these routes.
//     – Create a special route for authentication (e.g., return appropriate HTTP status codes).
// 8. Using HTTP Cookies for JWT Storage
//     Enable cookie handling using the cookie-parser middleware.
//     Set JWTs as HTTP cookies with the httpOnly option for enhanced security.
//     Consider implementing a /logout endpoint to clear cookies on logout.
// 9. Implementing Token Refresh
//     Modify the /login endpoint to generate both access tokens and refresh tokens.
//     Set refresh tokens as HTTP cookies with longer expiration times.
//     Create a /refresh endpoint to handle token refresh requests using refresh tokens.
//     Ensure the /refresh endpoint verifies and issues new access tokens.
// Exercises to Reinforce Your Knowledge
//     Implement validation for user registration to ensure that usernames and passwords meet certain criteria (e.g., minimum length, strong password requirements).
//     Create an endpoint that allows authenticated users to update their profile information, such as their username or password.
//     Enhance the /logout endpoint to also invalidate the refresh token when a user logs out for improved security.
//     Implement token revocation by maintaining a list of revoked refresh tokens on the server. When a user logs out or takes certain actions, mark their refresh token as revoked. Modify the /refresh endpoint to check if the refresh token is revoked before issuing a new access token.
//     Replace the in-memory user data array with a persistent data storage solution like a database (e.g., MongoDB, PostgreSQL). Adjust the authentication logic to work with the database.
//     Implement a user registration flow that requires email confirmation. When a user registers, send them a confirmation email with a unique token. Create an endpoint to confirm the email address when the user clicks on a confirmation link.
//     Implement rate limiting to protect against brute force attacks on the login and refresh endpoints. Limit the number of login and refresh requests a user can make within a certain time period.

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

const authMiddleware = require('./authMiddleware');
const router = require('./auth');

app.use(router);
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => { res.send('Hello, JWT Authentication!'); });

app.get('/profile', authMiddleware, (req, res) => {
  // Access the authenticated user's information via req.user
  res.json({ message: `Welcome, ${req.user.username}!` });
});

app.listen(port, () => { console.log(`Server is listening on port ${port}`); });
