const Donation = require('../models/Donation');

exports.donate = async (req, res) => {
    const { userId, amount, paymentMethod } = req.body;
    try {
        const donation = new Donation({ userId, amount, paymentMethod });
        await donation.save();
        res.status(201).json({ message: 'Donation successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
