import { ToolType } from "..";
import { Icon } from "../../../view/icon";


export class BaseTool {
    public getName = () => {return this.m_name};
    public getSymbol = () => {return this.m_symbol};
    public getType = () => {return this.m_type};
    
    protected m_name: string = '';
    protected m_symbol: Icon | undefined = undefined;
    protected m_type: ToolType;

    constructor(_type: ToolType) {
        this.m_type = _type;
    }

    public isValid(): boolean {
        return this.m_name !== '' && !!this.m_symbol && this.m_symbol.isValid();
    }

    public destroy(): boolean {
        this.m_name = '';
        delete this.m_symbol;
        return true;
    }

    public onClick(event: MouseEvent): void {
        console.warn("BaseTool onClick called. Really that you wanted?");
    }

    public onRightClick(event: MouseEvent): void {
        console.warn("BaseTool onClick called. Really that you wanted?");
    }
}