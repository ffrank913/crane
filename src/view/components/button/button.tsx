import { ToolType } from "../../../engine/tool";
import { Icon } from "../../icon";
import { IconComponent } from "../icon";
import './button.css'

type ButtonProps = {
  onClick?: (e: any) => void;
  symbol?: Icon;
  highlight?: boolean;
}

function ButtonComponent(_props: ButtonProps) {
  const { onClick, symbol, highlight } = _props;

  let icon = undefined;
  if(symbol) {
    icon = IconComponent(symbol)
  }

  let className = "Button";
  if(highlight) className+=" highlight"

  return (
    <button className={className} onClick={onClick ? onClick : undefined}>
      {icon}
    </button>
  );
}
  
export default ButtonComponent;