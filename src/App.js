import React, {Component} from 'react';
import ReactBootstrap from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import JNav from "./JNav.js";

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    units: 0,
    test: 13
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
}


function JMain() {
  return (
    <div id="content">

    </div>
  );
}



export default App;


