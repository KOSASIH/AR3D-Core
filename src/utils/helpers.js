// src/utils/helpers.js

// Function to format currency
export const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(amount);
};

// Function to log errors with additional context
export const logError = (error, context = {}) => {
    console.error('Error:', error);
    if (context) {
        console.error('Context:', context);
    }
    // Optionally send this error to a logging service
};

// Function to debounce a function call
export const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

// Function to generate a unique ID
export const generateUniqueId = () => {
    return `id_${Math.random().toString(36).substr(2, 9)}`;
};

// Function to deep clone an object
export const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

// Function to check if an object is empty
export const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
};

// Function to get a random element from an array
export const getRandomElement = (array) => {
    if (!Array.isArray(array) || array.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

// Function to format a date
export const formatDate = (date, format = 'YYYY-MM-DD') => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

// Function to convert a query string to an object
export const queryStringToObject = (queryString) => {
    return queryString
        .substring(1)
        .split('&')
        .reduce((acc, curr) => {
            const [key, value] = curr.split('=');
            acc[decodeURIComponent(key)] = decodeURIComponent(value);
            return acc;
        }, {});
};

// Function to convert an object to a query string
export const objectToQueryString = (obj) => {
    return Object.keys(obj)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
        .join('&');
};

// Function to throttle a function call
export const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function (...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
};

// Function to check if a value is a valid email
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Function to capitalize the first letter of each word in a string
export const capitalizeWords = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

// Function to shuffle an array
export const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

// Export all helper functions as a single object for easier import
export default {
    formatCurrency,
    logError,
    debounce,
    generateUniqueId,
    deepClone,
    isEmptyObject,
    getRandomElement,
    formatDate,
    queryStringToObject,
    objectToQueryString,
    throttle,
    isValidEmail,
    capitalizeWords,
    shuffleArray,
};
