// tests/integration/MultiUser .test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MultiUser  from '../../src/MultiUser ';
import { SocketProvider } from '../../src/SocketContext'; // Assuming you have a context for WebSocket

describe('MultiUser  Integration Tests', () => {
    it('renders multi-user interface correctly', () => {
        render(
            <SocketProvider>
                <MultiUser  />
            </SocketProvider>
        );
        expect(screen.getByText(/Multi-User  AR Experience/i)).toBeInTheDocument();
    });

    it('allows users to join a session', () => {
        render(
            <SocketProvider>
                <MultiUser  />
            </SocketProvider>
        );

        const joinButton = screen.getByRole('button', { name: /Join Session/i });
        fireEvent.click(joinButton);

        expect(screen.getByText(/You have joined the session/i)).toBeInTheDocument();
    });

    it('updates user list when a new user joins', () => {
        const { rerender } = render(
            <SocketProvider>
                <MultiUser  />
            </SocketProvider>
        );

        // Simulate a new user joining
        const newUser  = { id: 'user-2', name: 'User  2' };
        const socket = require('../../src/SocketContext').useSocket();
        socket.emit('userJoined', newUser );

        rerender(
            <SocketProvider>
                <MultiUser  />
            </SocketProvider>
        );

        expect(screen.getByText(/User  2/i)).toBeInTheDocument();
    });
});
