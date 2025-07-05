const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Too many attempts, please try again later",
});

router.post("login", authController.login);
router.post("/register", authController.register);

module.exports = router;
