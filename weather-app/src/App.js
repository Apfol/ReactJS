import WeatherLocation from './components/WeatherLocation';
import Radium from 'radium';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  render() {
    const styles = {
      width: '60%',
      height: '100px',
      border: "1px solid black",
      '@media (min-width: 500px)': {
        width: '450px'
      }
    }
    return (
      <div>
        <h1 style={styles}>Hello world!</h1>
      </div>
    );
  }
}

export default Radium(App);
