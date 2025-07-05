const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Conntect successfully to mongoDB");
  } catch (err) {
    console.log("Error to connect mongoDB: " + err);
  }
};

module.exports = connectDB;
