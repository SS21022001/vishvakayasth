const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();
const app = express();
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const membershipRoutes = require('./routes/membershipRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/memberships', membershipRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
