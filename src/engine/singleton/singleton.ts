import { WebGLRenderer, Scene, Camera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class Singleton {
    public static Init(_canvas: HTMLCanvasElement, _antialias: boolean, _camera: Camera) {
        this.m_Scene = new Scene();
        this.m_Renderer = new WebGLRenderer({canvas: _canvas, antialias: _antialias});
        this.m_Controls = new OrbitControls(_camera, this.Renderer.domElement);
        this.m_Controls.maxDistance = 50;
    }

    private static m_Scene: Scene | undefined;
    public static get Scene(): Scene {
        return this.m_Scene!;
    }

    private static m_Renderer: WebGLRenderer | undefined;
    public static get Renderer(): WebGLRenderer {
        return this.m_Renderer!;
    }

    private static m_Controls: OrbitControls | undefined;
    public static get OrbitControls(): OrbitControls {
        return this.m_Controls!;
    }
}