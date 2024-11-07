// src/utils/Config.js

const Config = {
    API_URL: process.env.API_URL || 'https://api.example.com',
    DEFAULT_LANGUAGE: 'en',
    MAX_RETRIES: 3,
    TIMEOUT: 5000, // Timeout for API requests in milliseconds
    LOG_LEVEL: process.env.LOG_LEVEL || 'info', // Log level: 'debug', 'info', 'warn', 'error'
    
    // Function to get configuration settings
    get(key) {
        return this[key] || null;
    },

    // Function to set configuration settings
    set(key, value) {
        this[key] = value;
    },

    // Function to load configuration from a JSON file
    loadConfig(filePath) {
        return fetch(filePath)
            .then(response => response.json())
            .then(config => {
                Object.assign(this, config);
            })
            .catch(error => {
                console.error('Failed to load configuration:', error);
            });
    }
};

export default Config;
