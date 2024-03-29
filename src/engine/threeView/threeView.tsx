import * as THREE from 'three';
import { Fog, Vector3 } from 'three';
import { Lighting } from '../lighting/lighting';
import { Movable, MovableProps } from '../objects/movable/movable';
import { World } from '../objects/world/world';
import { Global } from '../global/global';
import { RaycastLayer } from '../raycast/raycast';

export class ThreeView {
  private m_Camera: THREE.PerspectiveCamera;

  constructor(_canvasRef: HTMLCanvasElement) {
    Global.InitRenderer(_canvasRef, true);
    
    this.m_Camera = new THREE.PerspectiveCamera(50, (window.innerWidth - 250) / window.innerHeight, 1, 100);
    this.m_Camera.position.add(new Vector3(0, 1, 10));
    Global.InitCamera(this.m_Camera);

    Global.Scene.add(new Lighting());

    var geo = new THREE.BoxGeometry(1, 1, 1);
    const props = {type: "craneCube", color: 0x00ff00, geoProps: { geometry: geo }, raycastLayer: RaycastLayer.ARCHITECTURE } as MovableProps;
    var craneCube = new Movable(props);
    craneCube.position.setY(0.5);
    Global.Scene.add(craneCube);

    const world = new World();
    Global.Scene.add(world);

    const fog = new Fog('black', 10, 30);
    Global.Scene.fog = fog;

    this.update();
  }

  // ******************* PUBLIC EVENTS ******************* //
  updateValue(value: any) {
    // Whatever you need to do with React props
  }

  onMouseDown(event: any) {
    // Mouse down
    Global.ToolManager.getCurrentTool().onMouseDown(event);
  }

  onMouseUp(event: any) {
    // Mouse up
    Global.ToolManager.getCurrentTool().onMouseUp(event);
  }

  onMouseMove(event: any) {
    // Mouse moves
    Global.ToolManager.getCurrentTool().onMouseMove(event);
  }

  onWindowResize(_viewportWidth: number, _viewportHeight: number) {
      Global.Renderer.setSize(_viewportWidth, _viewportHeight);
      this.m_Camera.aspect = _viewportWidth / _viewportHeight;
      this.m_Camera.updateProjectionMatrix();
  }

  // ******************* RENDER LOOP ******************* //
  update(_time?: number) {
      Global.Renderer.render(Global.Scene, this.m_Camera);

      requestAnimationFrame(this.update.bind(this));
  }
}