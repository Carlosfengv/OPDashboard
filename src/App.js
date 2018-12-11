import React, { Component } from 'react';
import LayoutMain from './Layout/LayoutMain';
import './App.css';
import '@QCFE/lego-ui/lib/scss/lego-ui.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LayoutMain></LayoutMain>
      </div>
    );
  }
}

export default App;
