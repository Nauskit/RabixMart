const jwt = require("jsonwebtoken");
require("dotenv").config();

const ACCESS_SECRET_KEY = process.env.ACCESS_JWT_SECRET;
const REFRESH_SECRET_KEY = process.env.REFRESH_JWT_SECRET;

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
    REFRESH_SECRET_KEY,
    { expiresIn: "7d" }
  );
};

module.exports = { genarateAccessToken, genarateRefreshToken };
