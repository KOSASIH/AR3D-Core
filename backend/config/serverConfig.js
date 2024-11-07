// backend/config/serverConfig.js

const dotenv = require('dotenv');

dotenv.config();

const serverConfig = {
    port: process.env.PORT || 5000,
    corsOptions: {
        origin: process.env.CORS_ORIGIN || '*', // Allow all origins by default
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
    },
};

module.exports = serverConfig;
