// backend/models/Transaction.js

const mongoose = require('mongoose');

// Define the Transaction schema
const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User ',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the Transaction model
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
