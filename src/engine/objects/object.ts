import { BufferGeometry, ColorRepresentation, Mesh, MeshStandardMaterial, Object3D, Vector3 } from "three";
import { RaycastLayer } from "../raycast/raycast";


type BaseProps = {
    type: string;
    color: ColorRepresentation;
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
    private m_IsCraneObject: boolean = true;
    public get isCraneObject() { return this.m_IsCraneObject };

    protected m_Geometry: BufferGeometry;
    protected m_Material: MeshStandardMaterial;
    protected m_Mesh: Mesh;

    protected m_RaycastLayer: RaycastLayer = RaycastLayer.CRANE;
    public get raycastLayer() { return this.m_RaycastLayer };
    
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