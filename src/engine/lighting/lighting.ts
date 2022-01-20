import { AmbientLight, DirectionalLight, Object3D } from "three";

export class Lighting extends Object3D {
    constructor() {
        super();
        
        var ambientLight = new AmbientLight('white', 0.5);
        this.add(ambientLight);
        
        var directionalLight = new DirectionalLight('white', 1.0);
        directionalLight.position.set(500, 500, 500);
        this.add(directionalLight);
    }
}