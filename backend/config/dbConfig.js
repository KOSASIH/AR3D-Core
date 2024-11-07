// backend/config/dbConfig.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true, // Helps with unique indexes
        useFindAndModify: false, // Avoid deprecation warnings
    },
};

// Function to connect to the database
const connectDB = async () => {
    try {
        await mongoose.connect(dbConfig.uri, dbConfig.options);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = { connectDB, dbConfig };
