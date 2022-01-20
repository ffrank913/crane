import { ToolType } from "..";
import { Icon } from "../../../view/icon";
import { Icons } from "../../../view/icons";
import { BaseTool } from "../base/basetool";

export class SelectTool extends BaseTool {
    constructor() {
        super(ToolType.SELECT);

        this.m_symbol = new Icon(Icons.Pointer);

        this.m_name = "SelectTool";
    }
}