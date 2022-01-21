import { Selectable, SelectableProps } from "../selectable/selectable";

export type MovableProps = {

} & SelectableProps;

export class Movable extends Selectable {
    protected m_Locked: boolean;
    protected m_Movable: boolean;

    constructor(_props: MovableProps) {
        super(_props);

        this.m_Movable = true;
        this.m_Locked = false;
    }

    public Lock() {
        this.m_Locked = true;
    }
    
    public Unlock() {
        this.m_Locked = false;
    }
}