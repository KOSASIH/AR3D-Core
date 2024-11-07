// src/core/VoiceCommand.js

class VoiceCommand {
    constructor() {
        this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        this.recognition.onresult = (event) => this.handleResult(event);
    }

    startListening() {
        this.recognition.start();
    }

    handleResult(event) {
        const command = event.results[0][0].transcript.toLowerCase();
        this.executeCommand(command);
    }

    executeCommand(command) {
        switch (command) {
            case 'show object':
                console.log('Showing object in AR');
                // Logic to show object
                break;
            case 'hide object':
                console.log('Hiding object in AR');
                // Logic to hide object
                break;
            // Add more commands as needed
        }
    }
}

export default VoiceCommand;
