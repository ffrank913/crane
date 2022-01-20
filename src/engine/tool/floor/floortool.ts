import { ToolTypes } from "..";
import { BaseTool } from "../base/basetool";

export class FloorTool extends BaseTool {
    constructor() {
        super(ToolTypes.FLOOR);

        this.m_name = "FloorTool";
    }
}