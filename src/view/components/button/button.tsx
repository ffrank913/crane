import { ToolType } from "../../../engine/tool";
import { Icon } from "../../icon";
import { IconComponent } from "../icon";
import './button.css'

type ButtonProps = {
  onClick?: (e: any) => void;
  symbol?: Icon;
}

function ButtonComponent(_props: ButtonProps) {
  const { onClick, symbol } = _props;

  let icon = undefined;
  if(symbol) {
    icon = IconComponent(symbol)
  }

  return (
    <button className="Button" onClick={onClick ? onClick : undefined}>
      {icon}
    </button>
  );
}
  
export default ButtonComponent;