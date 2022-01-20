import { Singleton } from "../../../engine/singleton/singleton";
import { ToolType } from "../../../engine/tool";
import { Icon } from "../../icon";
import { ButtonComponent } from "../button";
import { IconComponent } from "../icon";

type ButtonProps = {
  tool: ToolType;
  symbol?: Icon;
}

function ToolButtonComponent(_props: ButtonProps) {
  const { tool, symbol } = _props;

  const onClick = () => {
    Singleton.ToolManager.setToolTo(tool);
  };

  let icon = undefined;
  if(symbol) {
    icon = IconComponent(symbol)
  }

  return (
    <ButtonComponent symbol={symbol} onClick={onClick} />
  );
}
  
export default ToolButtonComponent;