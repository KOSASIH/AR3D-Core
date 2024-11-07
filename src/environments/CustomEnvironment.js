// src/environments/CustomEnvironment.js

class CustomEnvironment {
    constructor(name) {
        this.name = name;
        this.scene = new THREE.Scene();
        this.objects = [];
    }

    addObject(object) {
        this.objects.push(object);
        this.scene.add(object);
    }

    load() {
        console.log(`Loading custom environment: ${this.name}`);
        // Additional loading logic (e.g., lighting, skybox)
    }

    unload() {
        console.log(`Unloading custom environment: ${this.name}`);
        this.objects.forEach(object => {
            this.scene.remove(object);
        });
        this.objects = [];
    }

    render(renderer, camera) {
        renderer.render(this.scene, camera);
    }
}

export default CustomEnvironment;
