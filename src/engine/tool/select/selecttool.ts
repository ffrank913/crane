import { ToolType } from "..";
import { Icon } from "../../../view/icon";
import { Icons } from "../../../view/icons";
import { RaycastLayer } from "../../raycast/raycast";
import { Global } from "../../global/global";
import { BaseTool } from "../base/basetool";
import { Movable } from "../../objects/movable/movable";

type DragInfo = {
  object: Movable,

}
export class SelectTool extends BaseTool {
  constructor() {
    super(ToolType.SELECT);

    this.m_symbol = new Icon(Icons.Pointer);

    this.m_name = "SelectTool";
  }

  public onMouseDown(event: MouseEvent): void {
    const intersects = Global.Raycaster.raycastMouse(event.clientX, event.clientY, { mask: RaycastLayer.ARCHITECTURE });

    if (intersects.length > 0) {
      console.log(intersects);
    }
  }

  public onMouseMove(event: MouseEvent): void {
      
  }

  public onMouseUp(event: MouseEvent): void {
      
  }

  private collectDragInfo() {

  }
}