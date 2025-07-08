const Delivery = require('../models/delivery')



exports.createDelivery = async (req, res) => {
    const { orderId, currentLocation, status } = req.body;
    try {

        const newDelivery = new Delivery({
            orderId,
            currentLocation,
            status,
            pathHistory: [
                {
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                }
            ]
        })
        await newDelivery.save();

        return res.status(200).json(newDelivery)
    } catch (err) {
        return res.status(500).json({ meesage: "Server Error: ", error: err.massge })
    }
}

exports.getAllDeliveries = async (req, res) => {
    try {
        const deliveries = await Delivery.find().populate("orderId")
        if (!deliveries) return res.status(404).json({ message: "Delivery not found" })
        return res.status(200).json(deliveries)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server Error: ", error: err.message })
    }
}

exports.updateDelivery = async (req, res) => {
    const { currentLocation, status } = req.body;
    const deliveryId = req.params.id;

    try {
        const delivery = await Delivery.findById(deliveryId);
        if (!delivery) return res.status(404).json({ message: "Delivery not found" })

        if (currentLocation) {
            delivery.currentLocation = {
                ...currentLocation,
                updatedAt: new Date()
            }

            delivery.pathHistory.push({
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude
            });
        };
        if (status) delivery.status = status;

        await delivery.save();

        return res.status(200).json({ message: "Update delivery successfully: ", delivery })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Failed to update delivery", error: err.message })
    }
}


exports.deleteDelivery = async (req, res) => {
    try {
        const result = await Delivery.findOneAndDelete(req.params.id);
        if (!result) return res.status(404).json({ message: "Delivery not found" });
        return res.status(200).json({ message: "Delivery deleted successfully" })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Failed to delete delivery", error: err.message })
    }
}