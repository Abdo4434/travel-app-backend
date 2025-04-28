require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');  // Adjust the path for the db config
const app = express();
const PORT = process.env.PORT || 5000;

// DB connection
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', require('./routes/authRouter'));
app.use('/hotels', require('./routes/hotelRouter'));
app.use('/wishlist', require('./routes/wishlistRouter'));
app.use('/categories', require('./routes/categoryRouter'));
app.use('/trips', require('./routes/tripRouter'));
app.use('/users', require('./routes/userRouter'));

// Start server
app.get('/', (req, res) => {
  res.send('Welcome to the Travel App Backend 🚀');
});

// Export the serverless function
module.exports = (req, res) => {
  app(req, res);  // Pass the request and response to the Express app
};