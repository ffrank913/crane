import { ToolType } from "..";
import { BaseTool } from "../base/basetool";

export class FloorTool extends BaseTool {
    constructor() {
        super(ToolType.FLOOR);

        this.m_name = "FloorTool";
    }
}