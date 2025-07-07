const Product = require("../models/product");

exports.createProduct = async (req, res) => {
  const { productName, description, price, stock, imageUrl } = req.body;
  const userId = req.user.id;

  if (!productName || !description || !price || !stock || !imageUrl) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const addProduct = new Product({
      owner: userId,
      productName,
      description,
      price,
      stock,
      imageUrl,
    });

    await addProduct.save();
    return res.status(200).json({ message: "Create product successful" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Server error: ", error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  const userId = req.user.id;

  try {
    const allProductId = await Product.find({ owner: userId });

    if (!allProductId) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ allProductId });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error: ", err });
  }
};

exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const deleteProduct = await Product.findByIdAndDelete(productId);
    if (!deleteProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error: ", error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { productName, description, price, stock, imageUrl } = req.body;

  try {
    const updateProduct = await Product.findByIdAndUpdate(
      productId,
      { productName, description, price, stock, imageUrl },
      { new: true, runValidators: true }
    );

    if (!updateProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res
      .status(200)
      .json({ message: "Update successfully", product: updateProduct });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error: ", err });
  }
};


exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find().populate("owner", "username");
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found" })
    }
    return res.status(200).json(products);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error", error: err.message });

  }
}