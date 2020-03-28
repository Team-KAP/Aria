import React, {Component} from 'react';
import ReactBootstrap from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import JNav from "./JNav.js";
import network from "./kerasCode.js";

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    network: new network(),
    addLayer: () => this.addLayer(), // pass to buildPanel, to call as needed
  }
}

  render(){
    return (
      <div class="wrapper">
        <JMain />
        <JNav {...this.state} />
      </div>
    );
  }

  addLayer() { // TODO
    const network = this.state.network;
    alert("Added Layer!");
  }
  
}


function JMain() {
  return (
    <div id="content">

    </div>
  );
}



export default App;


