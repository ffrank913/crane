import { BufferGeometry, ColorRepresentation, Mesh, MeshStandardMaterial, Object3D, Vector3 } from "three";
import { RaycastLayer } from "../raycast/raycast";


type BaseProps = {
  type?: string;
  color?: ColorRepresentation;
  raycastLayer?: RaycastLayer;
  geoProps?: BufferGeoProps | PointsGeoProps;
}

type BufferGeoProps = {
  geometry: BufferGeometry;
  points: never;
}

type PointsGeoProps = {
  geometry: never;
  points: Vector3[];
}

export type ObjectProps = BaseProps;

export class CraneObject extends Object3D {
  private m_IsCraneObject: boolean = true;
  public get isCraneObject() { return this.m_IsCraneObject };

  protected m_Geometry: BufferGeometry;
  protected m_Material: MeshStandardMaterial;
  protected m_Mesh: Mesh;

  protected m_RaycastLayer: RaycastLayer = RaycastLayer.NONE;
  public get raycastLayer() { return this.m_RaycastLayer };
  
  constructor(_props?: ObjectProps) {
    super();

    this.m_Geometry = new BufferGeometry();
    this.m_Material = new MeshStandardMaterial();

    this.applyProps(_props);

    this.m_Mesh = new Mesh(this.m_Geometry, this.m_Material);
    
    if(!_props) return;
    this.add(this.m_Mesh);
  }

  private applyProps(_props?: ObjectProps) {
    if(!_props) return;

    if(_props.geoProps) {
      if(_props.geoProps.geometry) this.m_Geometry = _props.geoProps.geometry;
      if(_props.geoProps.points) this.m_Geometry.setFromPoints(_props.geoProps.points);
    }

    if(_props.color) this.m_Material = new MeshStandardMaterial({ color: _props?.color || 'pink', fog: false });

    if(_props.raycastLayer) this.m_RaycastLayer = _props.raycastLayer;
  }
}