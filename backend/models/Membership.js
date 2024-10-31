const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    membershipType: { type: String, required: true },
    dateJoined: { type: Date, default: Date.now },
});

const Membership = mongoose.model('Membership', membershipSchema);
module.exports = Membership;
