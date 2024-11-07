// src/core/Analytics.js

class Analytics {
    constructor() {
        this.events = [];
    }

    logEvent(eventName, data) {
        const event = {
            name: eventName,
            data: data,
            timestamp: new Date().toISOString()
        };
        this.events.push(event);
        console.log('Event logged:', event);
    }

    getAnalytics() {
        return this.events;
    }
}

export default Analytics;
