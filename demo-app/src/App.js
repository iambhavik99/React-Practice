import './App.css';
import { FormComponent } from './components/FormComponent';
import { Greet } from './components/Greet';
import { ParentComponent } from './components/ParentComponent';
import { PortalComponent } from './components/PortalComponent';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Gamma">
        <p>Child of gamma</p>
      </Greet>
      <hr/>
      <Welcome name="admin"/>
      <hr/>
      <ParentComponent/>
      <hr/>
      <FormComponent/>
      <PortalComponent/>
    </div>
  );
}

export default App;