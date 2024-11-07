// src/collaboration/MultiUserManager.js

import WebSocketServer from './WebSocketServer.js';

class MultiUserManager {
    constructor() {
        this.users = {};
        this.webSocketServer = new WebSocketServer(this.handleConnection.bind(this));
    }

    handleConnection(ws) {
        ws.on('message', (message) => this.handleMessage(ws, message));
        ws.on('close', () => this.handleDisconnection(ws));
    }

    handleMessage(ws, message) {
        const data = JSON.parse(message);
        switch (data.type) {
            case 'join':
                this.addUser (ws, data.username);
                break;
            case 'update':
                this.updateUser Position(data);
                break;
            case 'leave':
                this.removeUser (ws);
                break;
            default:
                console.error('Unknown message type:', data.type);
        }
    }

    addUser (ws, username) {
        const userId = ws._socket.remoteAddress + ':' + ws._socket.remotePort;
        this.users[userId] = { username, ws };
        console.log(`${username} joined the session.`);
        this.broadcast({ type: 'userJoined', username });
    }

    updateUser Position(data) {
        const userId = data.userId;
        if (this.users[userId]) {
            this.users[userId].position = data.position;
            this.broadcast({ type: 'userUpdate', userId, position: data.position });
        }
    }

    removeUser (ws) {
        const userId = ws._socket.remoteAddress + ':' + ws._socket.remotePort;
        if (this.users[userId]) {
            const username = this.users[userId].username;
            delete this.users[userId];
            console.log(`${username} left the session.`);
            this.broadcast({ type: 'userLeft', userId });
        }
    }

    broadcast(message) {
        const messageString = JSON.stringify(message);
        for (const userId in this.users) {
            this.users[userId].ws.send(messageString);
        }
    }
}

export default MultiUser Manager;
