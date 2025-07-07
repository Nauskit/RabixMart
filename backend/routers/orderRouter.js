const express = require('express');
const router = express.Router();
const orderController = require("../controllers/orderController");
const verifyToken = require("../middleware/verifyToken")
const checkRole = require('../middleware/checkRole')

router.post('/create', verifyToken, orderController.createOrder)
router.get('/', verifyToken, orderController.getUserOrder)


module.exports = router;