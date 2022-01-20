import './App.css';
import { Global } from './engine/global/global';
import { ContainerComponent } from './view/components/container';

function App() {

  Global.InitToolManager();

  return (
    <div className="App">
      <header className="App-header">
        <ContainerComponent/>
      </header>
    </div>
  );
}

export default App;
