import { Global } from "../../../engine/global/global";
import { ToolType } from "../../../engine/tool";
import { Icon } from "../../icon";
import { ButtonComponent } from "../button";
import { IconComponent } from "../icon";

type ButtonProps = {
  tool: ToolType;
  onClick: (tt: ToolType) => void;
  highlight?: boolean;
  symbol?: Icon;
}

function ToolButtonComponent(_props: ButtonProps) {
  const { tool, symbol, onClick, highlight } = _props;

  let icon = undefined;
  if(symbol) {
    icon = IconComponent(symbol)
  }

  return (
    <ButtonComponent symbol={symbol} onClick={() => onClick(tool)} highlight={highlight} />
  );
}
  
export default ToolButtonComponent;