import { BufferGeometry, Line, LineBasicMaterial, MathUtils, Mesh, MeshBasicMaterial, Object3D, PerspectiveCamera, PlaneBufferGeometry, Vector3 } from "three";
import { RaycastLayer } from "../../raycast/raycast";
import { Global } from "../../global/global";
import { CraneObject } from "../object";

export class World extends CraneObject {
  private m_GridRoot: CraneObject;
  private m_PlaneRoot: CraneObject;

  private m_StepsBig: number;
  public get StepsBig() { return this.m_StepsBig };
  private m_StepsSmall: number;
  public get StepsSmall() { return this.m_StepsSmall };

  constructor() {
    super();

    this.m_GridRoot = new CraneObject();
    this.add(this.m_GridRoot);
    
    this.m_PlaneRoot = new CraneObject({ raycastLayer: RaycastLayer.GROUND });
    this.add(this.m_PlaneRoot);

    this.m_RaycastLayer = RaycastLayer.GROUND;

    this.m_StepsBig = 5;
    this.m_StepsSmall = 1;

    // create ground plane
    const planeSize = (Global.OrbitControls.object as PerspectiveCamera).far * 2; // create plane that camera can theoratically see all edges and does not clip via far value
    const geo = new PlaneBufferGeometry(planeSize, planeSize);
    const material = new MeshBasicMaterial({color: 'black'});
    const mesh = new Mesh(geo, material);
    mesh.rotateX(MathUtils.degToRad(-90));
    mesh.position.set(0, -0.001, 0);
    this.m_PlaneRoot.add(mesh);

    // create stripes
    const lineBigMaterial = new LineBasicMaterial({color: '#3d3d3d'});
    const lineBigPoints = [] as Vector3[];
    const lineSmallMaterial = new LineBasicMaterial({color: '#121212'});
    const lineSmallPoints = [] as Vector3[];

    for(var i = -planeSize; i < planeSize; i++) {
      if(i%this.m_StepsBig === 0) {
        // create x oriented points
        lineBigPoints.push(new Vector3(-planeSize/2, 0, i));
        lineBigPoints.push(new Vector3(planeSize/2, 0, i));

        // create z oriented points
        lineBigPoints.push(new Vector3(i, 0, -planeSize/2));
        lineBigPoints.push(new Vector3(i, 0, planeSize/2));
        continue;
      }

      if(i%this.m_StepsSmall === 0) {
        // create x oriented points
        lineSmallPoints.push(new Vector3(-planeSize/2, 0, i));
        lineSmallPoints.push(new Vector3(planeSize/2, 0, i));

        // create z oriented points
        lineSmallPoints.push(new Vector3(i, 0, -planeSize/2));
        lineSmallPoints.push(new Vector3(i, 0, planeSize/2));
        continue;
      }
    }

    const lineBigGeo = new BufferGeometry().setFromPoints(lineBigPoints);
    const lineBig = new Line(lineBigGeo, lineBigMaterial);
    this.m_GridRoot.add(lineBig);

    const lineSmallGeo = new BufferGeometry().setFromPoints(lineSmallPoints);
    const lineSmall = new Line(lineSmallGeo, lineSmallMaterial);
    this.m_GridRoot.add(lineSmall);

    Global.OrbitControls.addEventListener('change', () => updateGridPosition(this));
  }
}

const updateGridPosition = (_world: World) => {
  // move grid "with" camera
  // grid sticks to camera position and moves back at a threshold of this.stepsBig
  const camPos = Global.OrbitControls.object.position;

  if(Math.abs(camPos.x-_world.position.x) > _world.StepsBig) {
    _world.position.set(camPos.x-(camPos.x%_world.StepsBig), _world.position.y, _world.position.z);
  }

  if(Math.abs(camPos.z-_world.position.z) > _world.StepsBig) {
    _world.position.set(_world.position.x, _world.position.y, camPos.z-(camPos.z%_world.StepsBig));
  }
}