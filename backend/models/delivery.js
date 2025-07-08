const mongoose = require('mongoose');


const deliverySchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true
    },
    currentLocation: {
        latitude: Number,
        longitude: Number,
        updatedAt: {
            type: Date,
            default: Date.now
        }
    },
    status: {
        type: String,
        enum: ['preparing', 'dispatched', 'in_transit', 'delivered'],
        default: 'preparing'
    },
    pathHistory: [
        {
            latitude: Number,
            longitude: Number,
            timestamp: {
                type: Date,
                default: Date.now
            }
        }
    ]
})


module.exports = mongoose.model("Delivery", deliverySchema)