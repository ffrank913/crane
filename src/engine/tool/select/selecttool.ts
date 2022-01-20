import { ToolTypes } from "..";
import { Icon } from "../../../view/icon";
import { Icons } from "../../../view/icons";
import { BaseTool } from "../base/basetool";

export class SelectTool extends BaseTool {
    constructor() {
        super(ToolTypes.SELECT);

        this.m_symbol = new Icon(Icons.Pointer);

        this.m_name = "SelectTool";
    }
}