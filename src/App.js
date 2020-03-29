import React, { Component } from 'react';
import ReactBootstrap from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import JSide from "./JSide.js";
import { network, layer } from "./kerasCode.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      network: new network(),
      doAddLayer: () => this.doAddLayer(), // pass to buildPanel, to call as needed
      doSetOptimizer: (new_opt) => this.doSetOptimizer(new_opt),
      doSetActivation: new_act => this.doSetActivation(new_act),
      doSetInitializer: new_init => this.doSetInitializer(new_init),


    }
  }

  doSetOptimizer = new_opt => {
    console.log("starting");
    // const network = this.state.network;
    // network.theoptimizer = "test";
    // this.state.network.reportContent();
    let new_network = new network();

    new_network.copy(this.state.network);
    new_network.setOptimizer(new_opt);
    // new_network.reportContent();
    this.setState(prevState => {
      return {
        network: new_network
      }
    })
    // console.log("after setting state");
    // this.state.network.reportContent();
    // console.log("finished");
  }

  render() {
    return (
      <div class="wrapper">
        <p>
          <br />
          {this.state.network.optimizer} <br />
        </p>

        {/* <button onClick={() => this.changeOptimizer()}>Hi</button> */}
        <JMain />
        <JSide appState={this.state} />
      </div>
    );
  }

  // TODO
  doAddLayer() {
    const network = this.state.network;
    alert("Added Layer!");
  }

}


function JMain() {
  return (
    <div id="content">
      {/* <img src="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/3798405/600/400/m2/fpnw/wm0/3-.png?1514983771&s=8aab9047868045a98147b3068d8c8071"></img> */}
    </div>
  );
}



export default App;


