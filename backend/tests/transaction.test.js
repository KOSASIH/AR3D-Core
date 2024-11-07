// backend/tests/transaction.test.js

const request = require('supertest');
const app = require('../server'); // Import your Express app
const User = require('../models/User');
const Transaction = require('../models/Transaction');
const mongoose = require('mongoose');

let userId;

beforeAll(async () => {
    // Connect to the test database
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/testdatabase', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // Create a test user
    const user = new User({
        username: 'testuser',
        password: 'password123',
    });
    await user.save();
    userId = user._id;
});

afterAll(async () => {
    // Clean up the database and close the connection
    await Transaction.deleteMany({});
    await User.deleteMany({});
    await mongoose.connection.close();
});

describe('Transaction API', () => {
    it('should create a new transaction', async () => {
        const response = await request(app)
            .post('/api/transactions')
            .send({
                amount: 100,
                description: 'Test transaction',
                userId: userId,
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('_id');
        expect(response.body.amount).toBe(100);
        expect(response.body.description).toBe('Test transaction');
    });

    it('should retrieve all transactions for a user', async () => {
        const response = await request(app)
            .get(`/api/transactions/${userId}`);

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(1); // Assuming one transaction was created
    });
});
