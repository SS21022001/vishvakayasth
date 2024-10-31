const Membership = require('../models/Membership');

exports.registerMembership = async (req, res) => {
    const { userId, membershipType } = req.body;
    try {
        const membership = new Membership({ userId, membershipType });
        await membership.save();
        res.status(201).json({ message: 'Membership registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
