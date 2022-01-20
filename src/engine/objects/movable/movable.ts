import { CraneObject, ObjectProps } from "../object";
import { Selectable } from "../selectable/selectable";

type MovableProps = {

} & ObjectProps;

export class Movable extends Selectable {
    

    constructor(_props: MovableProps) {
        super(_props);
    }
}