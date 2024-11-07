// backend/routes/transactionRoutes.js

const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction'); // Assuming you have a Transaction model defined

// Create a new transaction
router.post('/', async (req, res) => {
    const { amount, description, userId } = req.body;

    try {
        const newTransaction = new Transaction({ amount, description, userId });
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(500).json({ message: 'Error creating transaction', error });
    }
});

// Get all transactions for a user
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const transactions = await Transaction.find({ userId });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving transactions', error });
    }
});

module.exports = router;
