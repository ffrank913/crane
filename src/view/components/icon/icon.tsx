import { Icon } from '../../icon';
import './icon.css';

function IconComponent(_symbol: Icon) {
  if(!_symbol.getPath() || _symbol.getPath().length === 0) {
      return <div></div>
    }

    return (
      <img src={_symbol.getPath()} alt="ph" className="Icon"/>
    );
  }
  
export default IconComponent;