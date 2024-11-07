// backend/tests/user.test.js

const request = require('supertest');
const app = require('../server'); // Import your Express app
const User = require('../models/User');
const mongoose = require('mongoose');

beforeAll(async () => {
    // Connect to the test database
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/testdatabase', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    // Clean up the database and close the connection
    await User.deleteMany({});
    await mongoose.connection.close();
});

describe('User  API', () => {
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/api/users/register')
            .send({
                username: 'testuser',
                password: 'password123',
            });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('User  registered successfully');
    });

    it('should not register a user with an existing username', async () => {
        const response = await request(app)
            .post('/api/users/register')
            .send({
                username: 'testuser',
                password: 'password123',
            });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Username already exists');
    });

    it('should log in a user', async () => {
        const response = await request(app)
            .post('/api/users/login')
            .send({
                username: 'testuser',
                password: 'password123',
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should not log in with invalid credentials', async () => {
        const response = await request(app)
            .post('/api/users/login')
            .send({
                username: 'testuser',
                password: 'wrongpassword',
            });

        expect(response.status).toBe(401);
        expect(response.body.message).toBe('Invalid credentials');
    });
});
