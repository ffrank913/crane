export class Icon {
    private path: string;
    
    constructor(_path: string) {
        this.path = _path;
    }

    public getPath(): string {
        return this.path;
    }

    public isValid(): boolean {
        return this.path !== '';
    }

}