import React, { Component } from 'react';
import ReactBootstrap from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import JSide from "./JSide.js";
import { network, layer } from "./kerasCode.js";
import ModelPanel from "./ModelPanel.js"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      network: new network(),
      doAddLayer: () => this.doAddLayer(), // pass to buildPanel, to call as needed
      doSetOptimizer: new_opt => this.doSetOptimizer(new_opt),

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

  doAddLayer = () => {
    let new_layer = new layer(10, 'relu', false, false);
    const newNetwork = new network();
    newNetwork.copy(this.state.network);

    if (newNetwork.arrLayers.length === 0) {
      new_layer.isFirstLayer = true;
    }
    newNetwork.addLayer(new_layer);

    this.setState(prevState => {
      return {
        network: newNetwork
      }
    })


  }

  render() {
    return (
      <div class="wrapper">
        <p>
          <br />
          {this.state.network.optimizer} <br />
        </p>

        {/* <button onClick={() => this.changeOptimizer()}>Hi</button> */}
        <ModelPanel appState={this.state}/>
        <JSide appState={this.state} />
      </div>
    );
  }

}

// function JMain() {
//   return (
//     <div id="content" style={{backgroundColor: "#444"}}>
//       {/* <img src="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/3798405/600/400/m2/fpnw/wm0/3-.png?1514983771&s=8aab9047868045a98147b3068d8c8071"></img> */}
//         <ModelPanel />
//     </div>
//   );
// }



export default App;


