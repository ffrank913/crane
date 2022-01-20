import * as THREE from 'three';
import { Fog, Vector3 } from 'three';
import { Lighting } from '../../../engine/lighting/lighting';
import { CraneObject, ObjectProps } from '../../../engine/objects/object';
import { World } from '../../../engine/objects/world/world';
import { Singleton } from '../../../engine/singleton/singleton';



export class ThreeView {
    private m_Camera: THREE.PerspectiveCamera;

    constructor(_canvasRef: HTMLCanvasElement) {
        this.m_Camera = new THREE.PerspectiveCamera(50, (window.innerWidth - 250) / window.innerHeight, 1, 100);
        this.m_Camera.position.add(new Vector3(0, 1, 10));

        Singleton.Init(_canvasRef, true, this.m_Camera);

        Singleton.Scene.add(new Lighting());

        var geo = new THREE.BoxGeometry(1, 1, 1);
        const props = {type: "craneCube", color: 0x00ff00, geometry: geo, movable: false} as ObjectProps;
        var craneCube = new CraneObject(props);
        Singleton.Scene.add(craneCube);

        const world = new World();
        Singleton.Scene.add(world);

        const fog = new Fog('black', 10, 30);
        Singleton.Scene.fog = fog;

        this.update();
    }

    // ******************* PUBLIC EVENTS ******************* //
    updateValue(value: any) {
      // Whatever you need to do with React props
    }

    onMouseMove() {
      // Mouse moves
    }

    onWindowResize(_viewportWidth: number, _viewportHeight: number) {
        Singleton.Renderer.setSize(_viewportWidth, _viewportHeight);
        this.m_Camera.aspect = _viewportWidth / _viewportHeight;
        this.m_Camera.updateProjectionMatrix();
    }

    // ******************* RENDER LOOP ******************* //
    update(_time?: number) {
        Singleton.Renderer.render(Singleton.Scene, this.m_Camera);

        requestAnimationFrame(this.update.bind(this));
    }
}