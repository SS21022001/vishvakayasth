const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
