// src/environments/PredefinedEnvironments/City.js

class City {
    constructor() {
        this.scene = new THREE.Scene();
        this.buildings = [];
        this.lights = [];
    }

    load() {
        console.log('Loading city environment...');
        this.createBuildings();
        this.createStreetLights();
    }

    createBuildings() {
        for (let i = 0; i < 50; i++) {
            const width = Math.random() * 1 + 0.5;
            const height = Math.random() * 3 + 1;
            const depth = Math.random() * 1 + 0.5;
            const buildingGeometry = new THREE.BoxGeometry(width, height, depth);
            const buildingMaterial = new THREE.MeshStandardMaterial({ color: 0x8B8B8B });
            const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
            building.position.set(Math.random() * 50 - 25, height / 2, Math.random() * 50 - 25);
            this.buildings.push(building);
            this.scene.add(building);
        }
    }

    createStreetLights() {
        for (let i = 0; i < 20; i++) {
            const lightGeometry = new THREE.CylinderGeometry(0.05, 0.05, 2, 8);
            const lightMaterial = new THREE.MeshStandardMaterial({ color: 0xFFD700 });
            const streetLight = new THREE.Mesh(lightGeometry, lightMaterial);
            streetLight.position.set(Math.random() * 50 - 25, 1, Math.random() * 50 - 25);
            this.lights.push(streetLight);
            this.scene.add(streetLight);
        }
    }

    unload() {
        console.log('Unloading city environment...');
        this.buildings.forEach(building => {
            this.scene.remove(building);
        });
        this.lights.forEach(light => {
            this.scene.remove(light);
        });
        this.buildings = [];
        this.lights = [];
    }
}

export default City;
