import { BaseTool } from "../../../engine/tool";
import { ToolButtonComponent } from "../toolbutton";
import './buttongrid.css';

type ButtonGridProps = {
  tools?: Array<BaseTool>
}

function ButtonGridComponent(_props: ButtonGridProps) {
  const { tools } = _props;

  return (
    <div className="ButtonGrid">
      {
        (tools && tools.length > 0) 
          ? tools.map((tool, i) => {
            return <ToolButtonComponent
              key={tool.getName()+i}
              tool={tool.getType()}
              symbol={tool.getSymbol()}
            />
          }) 
          : ''
      }
    </div>
  );
}
  
export default ButtonGridComponent;