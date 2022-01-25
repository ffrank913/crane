import { Intersection, Raycaster, Vector3 } from "three";
import { CraneObject } from "../objects/object";
import { Global } from "../global/global";

export enum RaycastLayer {
  NONE =          0x00000000,
  GROUND =        0x00000001,
  CRANE =         0x00000002,
  ARCHITECTURE =  0x00000004,
}

enum DistanceSorting {
  ASCENDING = 1,
  DESCENDING = 2,
}

export type CraneRaycasterParams = {
  sortByDistance?: DistanceSorting;
  mask?: RaycastLayer;
}

export class CraneRaycaster extends Raycaster {
  private m_Raycaster: Raycaster;
  private m_RaycastResults: Intersection[];

  constructor() {
    super();

    this.m_Raycaster = new Raycaster();
    this.m_RaycastResults = [];
  }

  public raycast(origin: Vector3, direction: Vector3, params?: CraneRaycasterParams): Intersection[] {
    this.m_RaycastResults = [];
    this.m_Raycaster.set(origin, direction);
    return this.raycastInternal(params);
  }

  public raycastMouse(clientX: number, clientY: number, params?: CraneRaycasterParams): Intersection[] {
    this.m_RaycastResults = [];

    const mousePos = {x: (clientX / Global.Renderer.domElement.width) * 2 - 1, y: -(clientY / Global.Renderer.domElement.height) * 2 + 1}
    this.m_Raycaster.setFromCamera(mousePos, Global.OrbitControls.object);

    return this.raycastInternal(params);
  }

  public raycastTopDown(origin: Vector3, params?: CraneRaycasterParams): Intersection[] {
    this.m_RaycastResults = [];
    this.m_Raycaster.set(origin, new Vector3(0, -1, 0));
    return this.raycastInternal(params);
  }

  // ################################################
  // ############      INTERNAL       ###############
  // ################################################

  private raycastInternal(params: CraneRaycasterParams = { sortByDistance: DistanceSorting.ASCENDING }): Intersection[] {
    // collect intersecting objects
    this.m_RaycastResults = this.m_Raycaster.intersectObjects(Global.Scene.children);
    
    // apply filter depending on params
    if(params) this.paramsFilter(params);
    
    // sort results for distance (nearest first)
    this.m_RaycastResults = this.m_RaycastResults.sort((a, b) => a.distance - b.distance);

    return this.m_RaycastResults;
  }

  private paramsFilter(params: CraneRaycasterParams) {
    // intersect with objects with a specific raycast layer only
    if(params.mask) {
      this.m_RaycastResults = this.m_RaycastResults.filter((intersect) => {
        if(intersect.object.parent && "raycastLayer" in intersect.object.parent) {
          const crane = (intersect.object.parent as CraneObject);
          if(crane.raycastLayer === RaycastLayer.NONE) return false;
          return (crane.raycastLayer & params.mask!) === crane.raycastLayer;
        }
      });
    }

    // sort results for distance (nearest first)
    if(params.sortByDistance) {
      switch(params.sortByDistance) {
        case DistanceSorting.ASCENDING: {
          this.m_RaycastResults = this.m_RaycastResults.sort((a, b) => a.distance - b.distance);
          break;
        }

        case DistanceSorting.DESCENDING: {
          this.m_RaycastResults = this.m_RaycastResults.sort((a, b) => b.distance - a.distance);
          break;
        }
      }
    }
  }
}