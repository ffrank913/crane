import { BufferGeometry, ColorRepresentation, Mesh, MeshStandardMaterial, Object3D, Vector3 } from "three";

type BaseProps = {
    type: string;
    color: ColorRepresentation;
    movable: boolean;
}

type BufferGeoProps = {
    geometry: BufferGeometry;
    points: never;
}

type PointsProps = {
    geometry: never;
    points: Vector3[];
}

export type ObjectProps = BaseProps & (BufferGeoProps | PointsProps);

export class CraneObject extends Object3D {    
    protected m_Geometry: BufferGeometry;
    protected m_Material: MeshStandardMaterial;
    protected m_Mesh: Mesh;
    
    protected m_Selectable = false;
    
    constructor(_props: ObjectProps) {
        super();

        if(!!_props.geometry) {
            this.m_Geometry = _props.geometry;
        } else {
            this.m_Geometry = new BufferGeometry().setFromPoints(_props.points);
        }

        this.m_Material = new MeshStandardMaterial({ color: _props.color, fog: false });
    
        this.m_Mesh = new Mesh(this.m_Geometry, this.m_Material);

        this.add(this.m_Mesh);
    }
}