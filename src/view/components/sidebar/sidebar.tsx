
import { BaseTool } from '../../../engine/tool';
import { ButtonGridComponent } from '../buttongrid';
import './sidebar.css'

type SidebarProps = {
  tools?: Array<BaseTool>
}

function SidebarComponent(_props: SidebarProps) {
  return (
    <div className="Sidebar">
      <ButtonGridComponent tools={_props.tools}/>
    </div>
  );
}

export default SidebarComponent;
