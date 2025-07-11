const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRouter = require("./routers/authRouter");
const productRouter = require('./routers/productRouter')
const orderRouter = require('./routers/orderRouter')
const deliveryRouter = require('./routers/deliveryRouter')
const app = express();

app.use(bodyParser.json());
app.use(cors());
connectDB();

app.use("/user", authRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter)
app.use("/delivery", deliveryRouter)

module.exports = app;