require('dotenv').config();
const express = require('express');
const connectDB = require('../config/db');  
const app = express();
const PORT = process.env.PORT || 5000;

// DB connection
connectDB();

// Middleware
app.use(express.json());
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error on the server
  res.status(500).json({ error: 'Internal Server Error' });
});
// Routes
app.use('/auth', require('../routes/authRouter'));
app.use('/hotels', require('../routes/hotelRouter'));
app.use('/wishlist', require('../routes/wishlistRouter'));
app.use('/categories', require('../routes/categoryRouter'));
app.use('/trips', require('../routes/tripRouter'));
app.use('/users', require('../routes/userRouter'));


// Handle GET requests to the root path ('/')
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html'); // Set the content type to HTML
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Travel App Backend</title>
    </head>
    <body>
      <h1>Welcome to the Travel App Backend</h1>
      <p>This is the backend API for the Travel App.</p>
    </body>
    </html>
  `);
});




// Export the serverless function
module.exports = (req, res) => {
  app(req, res);  // Pass the request and response to the Express app
};