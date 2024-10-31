const express = require('express');
const { registerMembership } = require('../controllers/membershipController');
const router = express.Router();

router.post('/membership', registerMembership);

module.exports = router;
