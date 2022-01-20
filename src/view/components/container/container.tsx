
import { Icons } from "../../icons";
import { FloorTool, SelectTool } from "../../../engine/tool";
import { SidebarComponent } from "../sidebar";
import { ThreeComponent } from "../threeComponent/threeComponent";
import './container.css'

function ContainerComponent() {
  const tools = [
    new SelectTool(Icons.pointer),
    new FloorTool(''),
    new FloorTool(''),
    new FloorTool(''),
    new FloorTool(''),
    new FloorTool(''),
    new FloorTool(''),
    new FloorTool(''),
  ];

  return (
    <div className="Container"> 
      <SidebarComponent tools={tools}/> 
      <ThreeComponent/>
    </div>
  );
}

export default ContainerComponent;
