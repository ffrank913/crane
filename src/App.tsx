import './App.css';
import { Singleton } from './engine/singleton/singleton';
import { ContainerComponent } from './view/components/container';

function App() {

  Singleton.InitToolManager();

  return (
    <div className="App">
      <header className="App-header">
        <ContainerComponent/>
      </header>
    </div>
  );
}

export default App;
