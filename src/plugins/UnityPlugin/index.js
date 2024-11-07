// src/plugins/UnityPlugin/index.js

class UnityPlugin {
    constructor() {
        this.unityInstance = null;
    }

    initialize(unityInstance) {
        this.unityInstance = unityInstance;
        console.log('Unity Plugin initialized.');
    }

    sendMessage(gameObject, methodName, message) {
        if (this.unityInstance) {
            this.unityInstance.SendMessage(gameObject, methodName, message);
            console.log(`Message sent to Unity: ${gameObject}.${methodName}(${message})`);
        } else {
            console.error('Unity instance is not initialized.');
        }
    }

    receiveMessage(callback) {
        window.addEventListener('message', (event) => {
            if (event.data && event.data.source === 'unity') {
                callback(event.data.payload);
            }
        });
        console.log('Listening for messages from Unity.');
    }

    setPlayerPosition(position) {
        this.sendMessage('Player', 'SetPosition', JSON.stringify(position));
    }

    getPlayerPosition(callback) {
        this.receiveMessage((data) => {
            if (data.type === 'playerPosition') {
                callback(JSON.parse(data.payload));
            }
        });
    }
}

export default UnityPlugin;
