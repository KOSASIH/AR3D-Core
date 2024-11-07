// src/iot/IoTIntegration.js

import IoTDeviceManager from './IoTDeviceManager.js';

class IoTIntegration {
    constructor() {
        this.deviceManager = new IoTDeviceManager();
    }

    connectToDevice(deviceInfo) {
        const device = this.deviceManager.addDevice(deviceInfo);
        if (device) {
            console.log(`Connected to device: ${device.name}`);
            this.setupDeviceListeners(device);
        } else {
            console.error('Failed to connect to device:', deviceInfo);
        }
    }

    setupDeviceListeners(device) {
        device.on('data', (data) => {
            console.log(`Data received from ${device.name}:`, data);
            this.handleDeviceData(device, data);
        });

        device.on('error', (error) => {
            console.error(`Error from device ${device.name}:`, error);
        });
    }

    handleDeviceData(device, data) {
        // Process incoming data from the device
        // For example, update UI, trigger actions, etc.
        console.log(`Processing data from ${device.name}:`, data);
    }

    disconnectDevice(deviceId) {
        const device = this.deviceManager.getDevice(deviceId);
        if (device) {
            device.disconnect();
            this.deviceManager.removeDevice(deviceId);
            console.log(`Disconnected from device: ${device.name}`);
        } else {
            console.error(`Device with ID ${deviceId} not found.`);
        }
    }
}

export default IoTIntegration;
