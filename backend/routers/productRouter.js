const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/:id", productController.getAllProductById);
router.post("/create", productController.createProduct);
router.delete("/:id", productController.deleteProduct);
