import { Icon } from "../../../view/icon";


export class BaseTool {
    public getName = () => {return this.name};
    public getSymbol = () => {return this.symbol};
    
    protected name: string = '';
    protected symbol: Icon | undefined = undefined;

    constructor(symbolPath: string) {
        this.symbol = new Icon(symbolPath);
    };

    public isValid(): boolean {
        return this.name !== '' && !!this.symbol && this.symbol.isValid();
    }
    
}