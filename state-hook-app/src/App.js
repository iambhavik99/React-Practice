import './App.css';
import { ClickEffect } from './Components/ClickEffect';
import { Forms } from './Components/Forms';
import { HookCounter } from './Components/HookCounter';
import { Lists } from './Components/Lists';

function App() {
  return (
    <div className="App">
      <HookCounter />
      <hr/>
      <Forms />
      <hr/>
      <Lists/>
      <hr/>
      <ClickEffect/>
    </div>
  );
}

export default App;
