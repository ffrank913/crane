import { BaseTool } from "../../../engine/tool";
import { ButtonComponent } from "../button";
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
            return <ButtonComponent
              key={tool.getName()+i}
              tool={tool.getType()}
              onClick={tool.getName}
              symbol={tool.getSymbol()}
            />
          }) 
          : ''
      }
    </div>
  );
}
  
export default ButtonGridComponent;