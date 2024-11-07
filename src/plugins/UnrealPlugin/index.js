// src/plugins/UnrealPlugin/index.js

class UnrealPlugin {
    constructor() {
        this.unrealInstance = null;
    }

    initialize(unrealInstance) {
        this.unrealInstance = unrealInstance;
        console.log('Unreal Plugin initialized.');
    }

    sendEvent(eventName, data) {
        if (this.unrealInstance) {
            this.unrealInstance.triggerEvent(eventName, data);
            console.log(`Event sent to Unreal: ${eventName} with data:`, data);
        } else {
            console.error('Unreal instance is not initialized.');
        }
    }

    receiveEvent(eventName, callback) {
        window.addEventListener('message', (event) => {
            if (event.data && event.data.source === 'unreal' && event.data.eventName === eventName) {
                callback(event.data.payload);
            }
        });
        console.log(`Listening for events from Unreal: ${eventName}`);
    }

    setPlayerPosition(position) {
        this.sendEvent('SetPlayerPosition', position);
    }

    getPlayerPosition(callback) {
        this.receiveEvent('PlayerPosition', (data) => {
            callback(data);
        });
    }
}

export default UnrealPlugin;
