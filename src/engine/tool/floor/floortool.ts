import { BaseTool } from "../base/basetool";

export class FloorTool extends BaseTool {
    constructor(symbolPath: string) {
        super(symbolPath);

        this.name = "FloorTool";
    }
}