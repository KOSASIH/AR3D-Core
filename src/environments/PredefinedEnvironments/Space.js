// src/environments/PredefinedEnvironments/Space.js

class Space {
    constructor() {
        this.scene = new THREE.Scene();
        this.stars = [];
        this.planets = [];
    }

    load() {
        console.log('Loading space environment...');
        this.createStars();
        this.createPlanets();
    }

    createStars() {
        const starGeometry = new THREE.SphereGeometry(0.1, 24, 24);
        const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        for (let i = 0; i < 1000; i++) {
            const star = new THREE.Mesh(starGeometry, starMaterial);
            star.position.set(Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100);
            this.stars.push(star);
            this.scene.add(star);
        }
    }

    createPlanets() {
        const planetGeometry = new THREE.SphereGeometry(1, 32, 32);
        const planetMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        const planet = new THREE.Mesh(planetGeometry, planetMaterial);
        planet.position.set(0, 0, -50);
        this.planets.push(planet);
        this.scene.add(planet);
    }

    unload() {
        console.log('Unloading space environment...');
        this.stars.forEach(star => {
            this.scene.remove(star);
        });
        this.planets.forEach(planet => {
            this.scene.remove(planet);
        });
        this.stars = [];
        this.planets = [];
    }
}

export default Space;
