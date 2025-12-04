const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const connectDB = require('./config/db'); // Import the file we just made
const authRoutes = require('./Routes/authRoutes');

// 1. Load Config (Must be first)
dotenv.config();

// 2. Connect to Database
connectDB();

// 3. Passport Config
require('./config/Passport'); 

const app = express();

// Middleware
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));