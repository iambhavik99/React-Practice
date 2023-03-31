import { Component } from 'react';
import './App.css';
import { ClickEffect } from './Components/ClickEffect';
import DataFetching from './Components/DataFetching';
import { Forms } from './Components/Forms';
import { HookCounter } from './Components/HookCounter';
import { Lists } from './Components/Lists';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataFetching />
      </div>
    )
  }
}

export default App;
