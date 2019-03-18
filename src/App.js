import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  render() {
    return (
      <div>
          <Routes />
      </div>
    )
  }

}

export default App;
