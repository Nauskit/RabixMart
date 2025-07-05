const bcrypt = require("bcrypt");
const User = require("../models/user");
const { genarateAccessToken, genarateRefreshToken } = require("../utils/jwt");

const SALT_ROUND = 10;

exports.register = async (req, res) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const exitingUser = await User.findOne({ username });
    if (exitingUser) {
      return res.status(401).json({ message: "username are already use" });
    }
    const hashPassword = await bcrypt.hash(password, SALT_ROUND);
    const createUser = await User.create({
      email,
      username,
      password: hashPassword,
    });
    return res.status(201).json({ message: "Register successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error: ", err });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const loginUser = await User.findOne({ email });
    if (!loginUser) {
      return res.status(404).json({ message: "User not found!" });
    }
    const isMatch = await bcrypt.compare(password, loginUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const accessToken = genarateAccessToken(loginUser);
    const refreshToken = genarateRefreshToken(loginUser);

    loginUser.refreshToken = refreshToken;
    await loginUser.save();

    return res.status(200).json({
      message: "Login successfully",
      username: loginUser.username,
      role: loginUser.role,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json("message: Server error: ", err);
  }
};
