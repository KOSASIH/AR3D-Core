// src/tests/app.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App'; // Adjust the import based on your file structure

describe('App Component', () => {
    test('renders the application header', () => {
        render(<App />);
        const headerElement = screen.getByText(/My High-Tech Application/i);
        expect(headerElement).toBeInTheDocument();
    });

    test('toggles theme on button click', () => {
        render(<App />);
        const buttonElement = screen.getByRole('button', { name: /toggle theme/i });
        fireEvent.click(buttonElement);
        // Check if the theme has changed (you can check for specific styles or classes)
        expect(document.body).toHaveStyle('background-color: #121212'); // Dark theme
        fireEvent.click(buttonElement);
        expect(document.body).toHaveStyle('background-color: #ffffff'); // Light theme
    });
});
