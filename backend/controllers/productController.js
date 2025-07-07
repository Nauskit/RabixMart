const Product = require("../models/product");

exports.createProduct = async (req, res) => {
  const { productName, description, price, stock, imageUrl } = req.body;
  if (!productName || !description || !price || !stock || !imageUrl) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const addProduct = new Product({
      productName,
      description,
      price,
      stock,
      imageUrl,
    });

    await addProduct.save();
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
    const deleteproduct = await Product.findByIdAndDelete(productId);
    if (!deleteproduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error: ", err });
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
