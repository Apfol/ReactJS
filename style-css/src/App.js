import Radium from 'radium';

import React, { Component } from 'react';
import { classes } from './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className={classes.heading}>Hello world</h1>
      </div>
    );
  }
}

export default App;