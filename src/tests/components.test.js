// src/tests/components.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from '../components/Navigation'; // Adjust the import based on your file structure

describe('Navigation Component', () => {
    test('renders navigation links', () => {
        render(<Navigation />);
        const homeLink = screen.getByText(/home/i);
        const settingsLink = screen.getByText(/settings/i);
        expect(homeLink).toBeInTheDocument();
        expect(settingsLink).toBeInTheDocument();
    });

    test('navigation links have correct icons', () => {
        render(<Navigation />);
        const homeIcon = screen.getByAltText(/home/i);
        const settingsIcon = screen.getByAltText(/settings/i);
        expect(homeIcon).toBeInTheDocument();
        expect(settingsIcon).toBeInTheDocument();
    });
});
