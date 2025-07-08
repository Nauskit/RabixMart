const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/deliveryController');
const verifyToken = require('../middleware/verifyToken')



router.post("/create", deliveryController.createDelivery);
router.get("/", deliveryController.getAllDeliveries);
router.put("/:id", deliveryController.updateDelivery);
router.delete("/:id", deliveryController.deleteDelivery);


module.exports = router;