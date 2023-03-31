import { Component } from 'react';
import './App.css';
import { CountReducer } from './Components/CountReducer';
import DataFetching from './Components/DataFetching';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CountReducer />
        <DataFetching/>
      </div>
    )
  }
}

export default App;
