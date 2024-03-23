const mongoose = require('mongoose');
const User = require('./models/User');

async function fetchData() {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb://localhost:27017/registration_form');
        console.log('MongoDB Connected');

        // Query users collection and print data
        const users = await User.find({});
        console.log('Users:', users);

        // Close the MongoDB connection
        await mongoose.disconnect();
        console.log('MongoDB Disconnected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

// Call the fetchData function
fetchData();

// Export the fetchData function if needed
module.exports = fetchData;
