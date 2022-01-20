import { BaseTool, ToolTypes, SelectTool, FloorTool } from ".";

export class ToolManager {
    constructor() {
        // create all tools
        this.fillToolBox();
        
        // set default tool
        this.m_currentTool = this.m_toolBox.selectTool;
    }

    private m_toolBox = {} as ToolBox;
    private m_currentTool: BaseTool;

    public setToolTo(_newTool: ToolTypes) {
        switch(_newTool) {
            case ToolTypes.SELECT: {
                this.m_currentTool = this.m_toolBox.selectTool;
                break;
            }
            case ToolTypes.FLOOR: {
                this.m_currentTool = this.m_toolBox.floorTool;
                break;
            }
        }
    }

    public getCurrentTool(): BaseTool {
        return this.m_currentTool;
    }

    public getToolBox(): ToolBox {
        return this.m_toolBox
    }

    private fillToolBox() {
        this.m_toolBox.selectTool = new SelectTool();
        this.m_toolBox.floorTool = new FloorTool();
    }
}

type ToolBox = {
    selectTool: SelectTool,
    floorTool: FloorTool,
}