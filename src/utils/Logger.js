// src/utils/Logger.js

class Logger {
    constructor() {
        this.enableLogging = true; // Toggle logging on/off
    }

    log(message, ...optionalParams) {
        if (this.enableLogging) {
            console.log(`[LOG] ${new Date().toISOString()}: ${message}`, ...optionalParams);
        }
    }

    info(message, ...optionalParams) {
        if (this.enableLogging) {
            console.info(`[INFO] ${new Date().toISOString()}: ${message}`, ...optionalParams);
        }
    }

    warn(message, ...optionalParams) {
        if (this.enableLogging) {
            console.warn(`[WARN] ${new Date().toISOString()}: ${message}`, ...optionalParams);
        }
    }

    error(message, ...optionalParams) {
        if (this.enableLogging) {
            console.error(`[ERROR] ${new Date().toISOString()}: ${message}`, ...optionalParams);
        }
    }

    setLogging(enabled) {
        this.enableLogging = enabled;
    }
}

const logger = new Logger();
export default logger;
