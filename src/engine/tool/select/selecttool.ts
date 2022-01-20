import { BaseTool } from "../base/basetool";

export class SelectTool extends BaseTool {
    constructor(symbolPath: string) {
        super(symbolPath);

        this.name = "SelectTool";
    }
}