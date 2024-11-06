// src/utils/validators.js

// Function to validate an email address
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Function to validate a password
export const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return (
        password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumbers &&
        hasSpecialChars
    );
};

// Function to validate a username
export const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Alphanumeric and underscores, 3-20 characters
    return usernameRegex.test(username);
};

// Function to validate a phone number
export const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
    return phoneRegex.test(phone);
};

// Function to validate a URL
export const validateURL = (url) => {
    const urlRegex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[^\s]*)?$/i;
    return urlRegex.test(url);
};

// Function to validate a date
export const validateDate = (dateString) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
    return dateRegex.test(dateString) && !isNaN(new Date(dateString).getTime());
};

// Function to validate a credit card number
export const validateCreditCard = (cardNumber) => {
    const cardNumberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|7[0-9]{15})$/;
    return cardNumberRegex.test(cardNumber);
};

// Function to validate a postal code
export const validatePostalCode = (postalCode, country) => {
    const postalCodePatterns = {
        US: /^\d{5}(-\d{4})?$/, // US ZIP code
        CA: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/, // Canadian postal code
        // Add more country patterns as needed
    };
    
    return postalCodePatterns[country] ? postalCodePatterns[country].test(postalCode) : false;
};

// Function to validate if a string is not empty
export const validateNotEmpty = (value) => {
    return value.trim().length > 0;
};

// Function to validate an array of values
export const validateArray = (array, validator) => {
    return Array.isArray(array) && array.every(validator);
};

// Function to validate a range of numbers
export const validateNumberRange = (value, min, max) => {
    const number = Number(value);
    return !isNaN(number) && number >= min && number <= max;
};

// Export all validation functions as a single object for easier import
export default {
    validateEmail,
    validatePassword,
    validateUsername,
    validatePhoneNumber,
    validateURL,
    validateDate,
    validateCreditCard,
    validatePostalCode,
    validateNotEmpty,
    validateArray,
    validateNumberRange,
};
