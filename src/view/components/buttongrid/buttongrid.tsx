import { useEffect, useState } from "react";
import { Global } from "../../../engine/global/global";
import { BaseTool, ToolType } from "../../../engine/tool";
import { ToolButtonComponent } from "../toolbutton";
import './buttongrid.css';

type ButtonGridProps = {
  tools?: Array<BaseTool>
}

function ButtonGridComponent(_props: ButtonGridProps) {
  const { tools } = _props;

  const [selectedTool, setSelectedTool] = useState<ToolType>(ToolType.SELECT);

  useEffect(() => {
    Global.ToolManager.setToolTo(selectedTool);
  }, [selectedTool]);

  return (
    <div className="ButtonGrid">
      {
        (tools && tools.length > 0) 
          ? tools.map((tool, i) => {
            return <ToolButtonComponent
              key={tool.getName()+i}
              tool={tool.getType()}
              onClick={setSelectedTool}
              symbol={tool.getSymbol()}
              highlight={selectedTool === tool.getType()}
            />
          }) 
          : ''
      }
    </div>
  );
}
  
export default ButtonGridComponent;