// src/utils/constants.js

// Environment Configuration
const ENV = process.env.NODE_ENV || 'development'; // Get the current environment

// API Base URL based on the environment
export const API_BASE_URL = ENV === 'production' 
    ? 'https://api.yourdomain.com' 
    : 'http://localhost:5000'; // Replace with your actual API base URL

// Authentication API URLs
export const AUTH_API_URL = `${API_BASE_URL}/auth`;
export const WALLET_API_URL = `${API_BASE_URL}/wallet`;

// Error Messages
export const ERROR_MESSAGES = {
    REQUIRED_FIELD: 'This field is required.',
    INVALID_EMAIL: 'Please enter a valid email address.',
    PASSWORD_TOO_SHORT: 'Password must be at least 8 characters long.',
    NETWORK_ERROR: 'Network error, please try again later.',
    UNAUTHORIZED: 'You are not authorized to perform this action.',
    FORBIDDEN: 'You do not have permission to access this resource.',
    NOT_FOUND: 'The requested resource was not found.',
    SERVER_ERROR: 'An unexpected error occurred on the server.',
    INVALID_CREDENTIALS: 'Invalid username or password.',
    SESSION_EXPIRED: 'Your session has expired. Please log in again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
    LOGIN_SUCCESS: 'Login successful! Welcome back.',
    LOGOUT_SUCCESS: 'You have been logged out successfully.',
    REGISTRATION_SUCCESS: 'Registration successful! Please log in.',
    TRANSACTION_SUCCESS: 'Transaction completed successfully.',
};

// Other Constants
export const MAX_RETRIES = 3; // Maximum number of retries for API calls
export const TIMEOUT_DURATION = 5000; // Timeout duration for API calls in milliseconds
export const DEFAULT_PAGE_SIZE = 10; // Default number of items per page for pagination
export const MAX_UPLOAD_SIZE_MB = 5; // Maximum file upload size in MB
export const SUPPORTED_IMAGE_FORMATS = ['image/jpeg', 'image/png', 'image/gif']; // Supported image formats for uploads

// User Roles
export const USER_ROLES = {
    ADMIN: 'admin',
    USER: 'user',
    GUEST: 'guest',
};

// Application Settings
export const APP_SETTINGS = {
    THEME: {
        LIGHT: 'light',
        DARK: 'dark',
    },
    LANGUAGE: {
        EN: 'en',
        ES: 'es',
        FR: 'fr',
    },
};

// Feature Flags
export const FEATURE_FLAGS = {
    ENABLE_NEW_DASHBOARD: true, // Toggle for new dashboard feature
    ENABLE_BETA_FEATURES: false, // Toggle for beta features
};

// Miscellaneous Constants
export const DATE_FORMATS = {
    DEFAULT: 'YYYY-MM-DD',
    TIME: 'HH:mm:ss',
    FULL: 'YYYY-MM-DD HH:mm:ss',
};

// Regular Expressions
export const REGEX_PATTERNS = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^\+?[1-9]\d{1,14}$/, // E.164 format
    URL: /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[^\s]*)?$/i,
};

// Export all constants as a single object for easier import
export default {
    API_BASE_URL,
    AUTH_API_URL,
    WALLET_API_URL,
    ERROR_MESSAGES,
    SUCCESS_MESSAGES,
    MAX_RETRIES,
    TIMEOUT_DURATION,
    DEFAULT_PAGE_SIZE,
    MAX_UPLOAD_SIZE_MB,
    SUPPORTED_IMAGE_FORMATS,
    USER_ROLES,
    APP_SETTINGS,
    FEATURE_FLAGS,
    DATE_FORMATS,
    REGEX_PATTERNS,
};
