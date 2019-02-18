import React, { Component } from 'react';
import Routes from './routes'
import './App.css';

class App extends Component {

  componentDidMount() {
    document.title = `Oi bruv`
  }

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
