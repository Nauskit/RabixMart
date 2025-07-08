const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const verifyToken = require("../middleware/verifyToken")
const checkRole = require('../middleware/checkRole')

router.get("/:id", productController.getProductById);
router.post("/create", verifyToken, productController.createProduct);
router.delete("/:id", productController.deleteProduct);
router.get('/', productController.getAllProduct);
router.put("/:id", productController.updateProduct);

module.exports = router;