const bodyParser = require("body-parser");
const express = require(express);
const cors = require("cors");
const connectDB = require("./config/db");
const authRouter = require("./routers/authRouter");
const app = express();

app.use(bodyParser.json);
app.use(cors());

app.use("user", authRouter);
connectDB();

app.listen(3000, () => {
  console.log("Server running on Port: http://localhost:3000");
});
