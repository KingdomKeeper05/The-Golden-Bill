const express = require('express');
const mongoose = require('mongoose');
const budgetRoutes = require('./routes/budgetRoutes'); // Import the routes
const bodyParser = require('body-parser');

// Initialize Express
const app = express();

// Middleware
app.use(bodyParser.json()); // For parsing application/json

// MongoDB connection
mongoose.connect('mongodb+srv://kfortuna04:SEI9zaSJXRQ0j4R4@thegoldenbill.xr8wk.mongodb.net/The-Golden-Bill?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// Use the routes
app.use('/api/budget', budgetRoutes);

// Serve static HTML files (you can adjust this if your HTML is in a different folder)
app.use(express.static('public'));

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
