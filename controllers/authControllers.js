const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = 'newtonSchool';

const decodeToken = (req, res, next) => {
  try {
    let { token } = req.body;
    console.log(token);
    const decodedToken = jwt.verify(token, JWT_SECRET);
    res.status(200).json({ payload: decodedToken, status: 'Success' });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      error: err.message,
    });
  }
};

/*
Instructions:
You need to implement a controller function called signup that handles the user signup process. The function receives a POST request with the user's username, email, and password. It creates a new user record in the database with the provided information, along with default values for profile picture, bio, location, website, social media handles, interests, and privacy settings. Upon successful creation of the user, it should return a JSON response with a status of "success" and the newly created user data. In case of any errors during the process, it should return a JSON response with a status of "error", an appropriate error message, and the error details.

Sample Input and Output:

Successful signup:

Input:
json
Copy code
{
  "username": "john_doe",
  "email": "johndoe@example.com",
  "password": "123456"
}

Output:
{
  "status": "success",
  "data": {
    "user": {
      "username": "john_doe",
      "email": "johndoe@example.com",
      "profilePicture": "https://example.com/default-profile-picture.jpg",
      "bio": "",
      "location": "",
      "website": "",
      "socialMediaHandles": {
        "twitter": "",
        "linkedin": ""
      },
      "interests": [],
      "privacySettings": {
        "isProfilePublic": true
      }
    }
  }
}

Internal Server Error:
Input:
(Assume a server/database error occurred during user creation)
Output:
{
  "status": "error",
  "message": "Internal Server Error",
  "error": "Error message describing the issue"
}
*/

const signup = async (req, res, next) => {
  //Write your code here
};

/*
Problem Statement: Login Controller
You need to implement a controller function called login that handles user login. The function receives a POST request with the user's email and password. It validates the presence of the email and password, checks if the provided credentials match an existing user record, generates a JSON Web Token (JWT) if the credentials are valid, and returns the token as a response. If the email or password is missing, or if the provided credentials do not match any user, it should return a JSON response with an appropriate error message and status code. In case of any errors during the process, it should return a JSON response with a status of "error," an appropriate error message, and the error details.

Sample Input and Output:
Successful login:
Input:
{
  "email": "johndoe@example.com",
  "password": "123456"
}
Output:
{
  "token": "<generated JWT token>",
  "status": "Success"
}
Missing Email or Password Error:
Input:
{
  "email": "",
  "password": "123456"
}
Output:
{
  "message": "Please provide email and password",
  "status": "Error"
}
Invalid Credentials Error:

Input:
{
  "email": "johndoe@example.com",
  "password": "wrongpassword"
}
Output:
{
  "message": "Invalid email or password",
  "status": "Error",
  "error": "Invalid Credentials"
}
Internal Server Error:
Input:
(Assume a server/database error occurred during user retrieval, password comparison, or JWT generation)
Output:
{
  "status": "error",
  "message": "Internal Server Error",
  "error": "Error message describing the issue"
}
 */
const login = async (req, res, next) => {
  //Write your code here
};

/*
 You need to implement a logout controller which takes an authorization token as input, verifies the token, clears the cookie and logs Problem Statement: Logout Controller

You need to implement a controller function called logout that handles user logout. The function receives a request containing an authorization token in the headers. It verifies the presence of the token, clears the corresponding cookie, and returns a JSON response indicating a successful logout. If the token is missing, it should return a JSON response with an appropriate error message and status code. In case of any errors during the process, it should return a JSON response with a status of "error," an appropriate error message, and the error details.

Sample Input and Output:
Successful logout:
Input:
Headers:
Authorization: <token>
Output:
{
  "message": "Logged out successfully.",
  "status": "Success"
}

Missing Token Error:
Input: <None>
Output:
{
  "message": "Authentication failed: Missing token.",
  "status": "Error"
}

Internal Server Error:
Input:
(Assume a server/database error occurred during token verification or cookie clearing)
Output:
{
  "status": "error",
  "message": "Internal Server Error",
  "error": "<Error message>"
}
*/
const logout = (req, res) => {
  //Write your code here
};

module.exports = { login, logout, signup, decodeToken };
