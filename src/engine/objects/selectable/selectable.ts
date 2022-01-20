import { CraneObject, ObjectProps } from "../object";

type SelectableProps = {

} & ObjectProps;

export class Selectable extends CraneObject {
    

    constructor(_props: SelectableProps) {
        super(_props);

        this.m_Selectable = true;
    }
}