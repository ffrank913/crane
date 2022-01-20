import { Raycaster, Vector2 } from "three";
import { ToolType } from "..";
import { Icon } from "../../../view/icon";
import { Icons } from "../../../view/icons";
import { RaycastLayer } from "../../raycast/raycast";
import { Global } from "../../global/global";
import { BaseTool } from "../base/basetool";

export class SelectTool extends BaseTool {
    private m_Raycaster: Raycaster;
    
    constructor() {
        super(ToolType.SELECT);

        this.m_symbol = new Icon(Icons.Pointer);

        this.m_name = "SelectTool";

        this.m_Raycaster = new Raycaster();
    }

    public onClick(event: MouseEvent): void {
        const intersects = Global.Raycaster.raycastMouse(event.clientX, event.clientY, { mask: RaycastLayer.CRANE | RaycastLayer.ARCHITECTURE });

        console.log(intersects);
        if (intersects.length > 0) {
        }
    }

    public onRightClick(event: MouseEvent): void {
        
    }
}