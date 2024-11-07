// src/environments/EnvironmentManager.js

import Forest from './PredefinedEnvironments/Forest.js';
import City from './PredefinedEnvironments/City.js';
import Space from './PredefinedEnvironments/Space.js';

class EnvironmentManager {
    constructor() {
        this.environments = {
            forest: new Forest(),
            city: new City(),
            space: new Space(),
        };
        this.currentEnvironment = null;
    }

    loadEnvironment(name) {
        if (this.environments[name]) {
            this.currentEnvironment = this.environments[name];
            this.currentEnvironment.load();
        } else {
            console.error(`Environment ${name} not found.`);
        }
    }

    unloadCurrentEnvironment() {
        if (this.currentEnvironment) {
            this.currentEnvironment.unload();
            this.currentEnvironment = null;
        }
    }

    getCurrentEnvironment() {
        return this.currentEnvironment;
    }
}

export default EnvironmentManager;
