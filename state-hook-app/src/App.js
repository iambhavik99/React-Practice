import { Component } from 'react';
import './App.css';
import { CountReducer } from './Components/CountReducer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CountReducer />
      </div>
    )
  }
}

export default App;
