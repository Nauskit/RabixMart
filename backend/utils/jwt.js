const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const ACCESS_SECRET_KEY = process.env.ACCESS_JWT_SECRET;
const REFRASH_SECRET_KEY = process.env.REFRASH_JWT_SECRET;

const genarateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role,
    },
    ACCESS_SECRET_KEY,
    { expiresIn: "15m" }
  );
};

const genarateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role,
    },
    REFRASH_SECRET_KEY,
    { expiresIn: "7d" }
  );
};

module.exports = { genarateAccessToken, genarateRefreshToken };
