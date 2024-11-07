// src/collaboration/WebSocketServer.js

import WebSocket from 'ws';

class WebSocketServer {
    constructor(connectionHandler) {
        this.wss = new WebSocket.Server({ port: 8080 });
        this.wss.on('connection', connectionHandler);
        console.log('WebSocket server is running on ws://localhost:8080');
    }
}

export default WebSocketServer;
