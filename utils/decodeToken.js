require("dotenv").config();

const jwt = require("jsonwebtoken");

// verify access token provided
let decodeToken = async (token, res) =>
  await jwt.verify(token, process.env.JWT_SECRET, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      return authData;
    }
  });

module.exports = decodeToken;
