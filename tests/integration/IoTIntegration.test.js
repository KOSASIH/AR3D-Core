// tests/integration/IoTIntegration.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IoTIntegration from '../../src/IoTIntegration';
import { IoTProvider } from '../../src/IoTContext'; // Assuming you have a context for IoT devices

describe('IoT Integration Tests', () => {
    it('renders IoT control interface correctly', () => {
        render(
            <IoTProvider>
                <IoTIntegration />
            </IoTProvider>
        );
        expect(screen.getByText(/IoT Device Control/i)).toBeInTheDocument();
    });

    it('allows users to toggle IoT devices', () => {
        render(
            <IoTProvider>
                <IoTIntegration />
            </IoTProvider>
        );

        const toggleButton = screen.getByRole('button', { name: /Toggle Device/i });
        fireEvent.click(toggleButton);

        expect(screen.getByText(/Device is ON/i)).toBeInTheDocument();
    });

    it('updates device status when an IoT device changes state', () => {
        const { rerender } = render(
            <IoTProvider>
                <IoTIntegration />
            </IoTProvider>
        );

        // Simulate an IoT device state change
        const deviceUpdate = { id: 'device-1', status: 'OFF' };
        const iotContext = require('../../src/IoTContext').useIoT();
        iotContext.updateDeviceStatus(deviceUpdate);

        rerender(
            <IoTProvider>
                <IoTIntegration />
            </IoTProvider>
        );

        expect(screen.getByText(/Device is OFF/i)).toBeInTheDocument();
    });
});
