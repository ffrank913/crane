
import { Singleton } from "../../../engine/singleton/singleton";
import { BaseTool } from "../../../engine/tool";
import { SidebarComponent } from "../sidebar";
import { ThreeComponent } from "../threeComponent/threeComponent";
import './container.css'

function ContainerComponent() {
  const tools:BaseTool[] = [];
  const toolBox = Singleton.ToolManager.getToolBox();
  Object.keys(toolBox).map((name) => {
    return tools.push((toolBox as any)[name]);
  })

  return (
    <div className="Container"> 
      <SidebarComponent tools={tools}/>
      <ThreeComponent/>
    </div>
  );
}

export default ContainerComponent;
