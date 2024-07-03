const express = require('express');
const adminRoutes = require('./routes/adminRoutes');

// Import required modules

// Create an instance of Express
const app = express();

// Define routes and middleware
// ...

app.use(express.json());

app.use('/api', adminRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});