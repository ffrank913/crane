import { CraneObject, ObjectProps } from "../object";

export type SelectableProps = {

} & ObjectProps;

export class Selectable extends CraneObject {
        
    protected m_Selectable: boolean;
    protected m_Selected: boolean;

    constructor(_props: SelectableProps) {
        super(_props);

        this.m_Selectable = true;
        this.m_Selected = false;
    }

    public Select() {
        this.m_Selected = true;
    }

    public Deselect() {
        this.m_Selected = false;
    }
}