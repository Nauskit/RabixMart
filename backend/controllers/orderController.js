const Order = require('../models/order')
const Product = require('../models/order')

exports.createOrder = async (req, res) => {
    const userId = req.user.id;
    const { products } = req.body;
    if (!products || products.length === 0) {
        return res.status(400).json({ message: "Products are required" });
    }

    try {
        let totalPrice = 0;
        const orderItems = [];
        for (const item of products) { // loop product
            const product = await Product.findById(item.productId); //find product

            if (!product) {
                return res.status(404).json({ meesage: "product not found" })
            }

            if (product.stock < item.quantity) {
                return res.status(400).json({
                    message: `Insufficient stock for product ${product.productName}`
                })
            }

            const priceAtOrder = product.price;  //sum price*quantity
            const subTotal = priceAtOrder * item.quantity;
            totalPrice += subTotal;

            orderItems.push({  //push to orderItems array
                productId: item.productId,
                quantity: item.quantity,
                priceAtOrder
            })

            product.stock -= item.quantity;
            await product.save();

        }

        const newOrder = new Order({
            userId,
            products: orderItems,
            totalPrice,
        })

        await newOrder.save();

        return res.status(200).json({
            message: "Order created successfully",
            order: newOrder
        })

    } catch (err) {
        return res.status(500).json({ message: "Server Error: ", error: err.message })
    }
}


exports.getUserOrder = async (req, res) => {
    const userId = req.user.id;

    try {
        const userOrder = await Order.find({ userId }).populate("products.productId");
        if (!userOrder) {
            return res.json(404).json({ message: "Order not found!" })
        }

        return res.status(200).json(userOrder)

    } catch (err) {
        return res.status(500).json({ message: "Server Error: ", error: err.message })
    }
}



exports.updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status, paymentStatus } = req.body;

    try {
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ message: "Order no found" })
        }

        if (status) order.status = status;
        if (paymentStatus) order.paymentStatus = paymentStatus;
        order.updatedAt = Date.now();

        await order.save();

        return res.status(200).json({ message: "Order updated", order })
    } catch (err) {
        return res.status(500).json({ message: "Server Error: ", error: err.message })
    }
}

exports.deleteOrder = async (req, res) => {
    const orderId = req.params.id;
    try {
        const deleteProduct = await Order.findByIdAndDelete(orderId);
        if (!deleteProduct) {
            return res.status(404).json({ message: "Order not found" })
        }
        return res.status(200).json({ message: "Order deleted successfully" })
    } catch (err) {
        return res.status(500).json({ message: "Server Error: ", error: err.message })
    }

}