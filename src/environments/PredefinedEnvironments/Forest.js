// src/environments/PredefinedEnvironments/Forest.js

class Forest {
    constructor() {
        this.scene = new THREE.Scene();
        this.trees = [];
        this.lights = [];
    }

    load() {
        console.log('Loading forest environment...');
        this.createTrees();
        this.createLighting();
    }

    createTrees() {
        for (let i = 0; i < 100; i++) {
            const treeGeometry = new THREE.CylinderGeometry(0.1, 0.5, 2, 8);
            const treeMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
            const tree = new THREE.Mesh(treeGeometry, treeMaterial);
            tree.position.set(Math.random() * 50 - 25, 0, Math.random() * 50 - 25);
            this.trees.push(tree);
            this.scene.add(tree);
        }
    }

    createLighting() {
        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5);
        this.lights.push(ambientLight, directionalLight);
        this.scene.add(ambientLight);
        this.scene.add(directionalLight);
    }

    unload() {
        console.log('Unloading forest environment...');
        this.trees.forEach(tree => {
            this.scene.remove(tree);
        });
        this.lights.forEach(light => {
            this.scene.remove(light);
        });
        this.trees = [];
        this.lights = [];
    }
}

export default Forest;
