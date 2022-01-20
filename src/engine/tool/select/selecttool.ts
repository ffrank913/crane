import { Raycaster, Vector2 } from "three";
import { ToolType } from "..";
import { Icon } from "../../../view/icon";
import { Icons } from "../../../view/icons";
import { RaycastLayer } from "../../layers";
import { Singleton } from "../../singleton/singleton";
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
        console.log("click");
        const mousePos = {x: (event.clientX / window.innerWidth) * 2 - 1, y: -(event.clientY / window.innerHeight) * 2 + 1}
        this.m_Raycaster.setFromCamera(mousePos, Singleton.OrbitControls.object);
        this.m_Raycaster.layers.set(RaycastLayer.CRANE);
        const intersects = this.m_Raycaster.intersectObjects(Singleton.Scene.children);
        if (intersects.length > 0) {
            console.log(intersects);
          }
    }

    public onRightClick(event: MouseEvent): void {
        
    }
}