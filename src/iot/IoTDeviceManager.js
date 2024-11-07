// src/iot/IoTDeviceManager.js

class IoTDeviceManager {
    constructor() {
        this.devices = {};
    }

    addDevice(deviceInfo) {
        const deviceId = deviceInfo.id;
        if (this.devices[deviceId]) {
            console.error(`Device with ID ${deviceId} already exists.`);
            return null;
        }

        const device = new IoTDevice(deviceInfo);
        this.devices[deviceId] = device;
        return device;
    }

    getDevice(deviceId) {
        return this.devices[deviceId] || null;
    }

    removeDevice(deviceId) {
        if (this.devices[deviceId]) {
            this.devices[deviceId].disconnect();
            delete this.devices[deviceId];
        } else {
            console.error(`Device with ID ${deviceId} not found.`);
        }
    }

    listDevices() {
        return Object.values(this.devices);
    }
}

class IoTDevice {
    constructor({ id, name, type, connectionString }) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.connectionString = connectionString;
        this.connected = false;
        this.eventListeners = {
            data: [],
            error: [],
        };
        this.connect();
    }

    connect() {
        // Simulate connection to the device
        this.connected = true;
        console.log(`Device ${this.name} connected.`);
        this.simulateData();
    }

    disconnect() {
        this.connected = false;
        console.log(`Device ${this.name} disconnected.`);
    }

    on(event, listener) {
        if (this.eventListeners[event]) {
            this.eventListeners[event].push(listener);
        } else {
            console.error(`Event ${event} is not supported.`);
        }
    }

    emit(event, data) {
        if (this.eventListeners[event]) {
            this.eventListeners[event].forEach(listener => listener(data));
        }
    }

    simulateData() {
        // Simulate data emission from the device every 5 seconds
        setInterval(() => {
            if (this.connected) {
                const data = { temperature: Math.random() * 100, humidity: Math.random() * 100 };
                this.emit('data', data);
            }
        }, 5000);
    }
}

export default IoTDeviceManager;
