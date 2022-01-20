import { ToolTypes } from "..";
import { Icon } from "../../../view/icon";


export class BaseTool {
    public getName = () => {return this.m_name};
    public getSymbol = () => {return this.m_symbol};
    public getType = () => {return this.m_type};
    
    protected m_name: string = '';
    protected m_symbol: Icon | undefined = undefined;
    protected m_type: ToolTypes;

    constructor(_type: ToolTypes) {
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
}