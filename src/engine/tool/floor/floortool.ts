import { ToolType } from "..";
import { BaseTool } from "../base/basetool";

export class FloorTool extends BaseTool {
    constructor() {
        super(ToolType.FLOOR);

        this.m_name = "FloorTool";
    }

    public onMouseDown(event: MouseEvent): void {
        
    }

    public onMouseMove(event: MouseEvent): void {
        
    }

    public onMouseUp(event: MouseEvent): void {
        
    }
}