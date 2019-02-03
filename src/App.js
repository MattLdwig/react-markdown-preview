import React, { Component } from 'react';
import Markdown from './Components/Markdown';
import Header from './Components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Markdown />
      </div>
    );
  }
}

export default App;
