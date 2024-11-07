// backend/controllers/transactionController.js

const Transaction = require('../models/Transaction');

// Create a new transaction
exports.createTransaction = async (req, res) => {
    const { amount, description, userId } = req.body;

    try {
        const newTransaction = new Transaction({ amount, description, userId });
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(500).json({ message: 'Error creating transaction', error });
    }
};

// Get all transactions for a user
exports.getUser Transactions = async (req, res) => {
    const { userId } = req.params;

    try {
        const transactions = await Transaction.find({ userId });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving transactions', error });
    }
};
