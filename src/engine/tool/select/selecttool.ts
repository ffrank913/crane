import { ToolType } from "..";
import { Icon } from "../../../view/icon";
import { Icons } from "../../../view/icons";
import { RaycastLayer } from "../../raycast/raycast";
import { Global } from "../../global/global";
import { BaseTool } from "../base/basetool";
import { Movable } from "../../objects/movable/movable";
import { Intersection, Vector3 } from "three";

type DragInfo = {
  object: Movable,
  objectOrigin: Vector3,
  hitPoint: Vector3,
  objectOriginOffset: Vector3,
}
export class SelectTool extends BaseTool {
  private m_DragInfo: DragInfo | undefined;
  private m_DragTo: Vector3 | undefined;

  constructor() {
    super(ToolType.SELECT);
    this.m_symbol = new Icon(Icons.Pointer);
    this.m_name = "SelectTool";
  }

  public onMouseDown(event: MouseEvent): void {
    if(!!this.m_DragInfo || !!this.m_DragTo) {
      console.warn("Dragging started while old dragging not completed: ", this.m_DragInfo, this.m_DragTo);
      return;
    }

    // collect intersection with nearest object
    const intersects = Global.Raycaster.raycastMouse(event.clientX, event.clientY, { mask: RaycastLayer.ARCHITECTURE });
    if (intersects.length > 0) {
      this.startDrag(intersects[0], event);
    }
  }

  public onMouseMove(event: MouseEvent): void {
    if(!this.m_DragInfo) return;
    this.drag(this.m_DragInfo, event);
  }

  public onMouseUp(event: MouseEvent): void {
    this.endDrag();
  }

  // ################################################
  // ############   DRAG ALGORITHMS   ###############
  // ################################################

  private startDrag(intersect: Intersection, event: MouseEvent) {
    // collect initial ground intersection to calculate offset to object origin
    const groundIntersections = Global.Raycaster.raycastMouse(event.clientX, event.clientY, { mask: RaycastLayer.GROUND });

    // create drag info object
    this.m_DragInfo = {
      object: intersect.object as Movable,
      objectOrigin: intersect.object.position.clone(),
      hitPoint: intersect.point.clone(),
      objectOriginOffset: groundIntersections[0].point.clone().sub(intersect.object.position),
    }

    // disable orbit controls while dragging
    Global.OrbitControls.enabled = false;
  }

  private drag(_dragInfo: DragInfo, event: MouseEvent) {
    // find ground intersection to move object to
    const groundIntersections = Global.Raycaster.raycastMouse(event.clientX, event.clientY, { mask: RaycastLayer.GROUND });
    
    // if no ground intersection cancel moving object
    // can occur if you are not hitting ground surface while dragging
    if(groundIntersections.length === 0) return;

    // calculate drag position depending on ground intersection
    this.m_DragTo = groundIntersections[0].point.clone().sub(_dragInfo.objectOriginOffset);
    
    // set object position to drag position
    _dragInfo.object.position.copy(this.m_DragTo);
  }
  
  private endDrag() {
    // reset values for dragging
    this.m_DragInfo = undefined;
    this.m_DragTo = undefined;
    
    // enable orbit controls after dragging
    Global.OrbitControls.enabled = true;
  }
}