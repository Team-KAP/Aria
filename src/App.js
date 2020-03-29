import React, { Component } from 'react';
import ReactBootstrap from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import JSide from "./JSide.js";
import { network, layer } from "./kerasCode.js";
import {ModelPanel} from "./ModelPanel.js"
//import {NetworkGraph} from "./ModelPanel.js"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideModelPanel: false,
      unhideModelPanel: () => this.unhideModelPanel(),
      network: new network(),
      selectedLayer: 0,
      loadable: false,
      doAddLayer: () => this.doAddLayer(), // pass to buildPanel, to call as needed
      doSetOptimizer: new_opt => this.doSetOptimizer(new_opt),
      doSetActivation: (layer, new_act) => this.doSetActivation(layer, new_act),
      doSetWeightInit: (layer, new_weight) => this.doSetWeightInit(layer, new_weight),
      doSetNumNodes: (layer, new_nodes) => this.doSetNumNodes(layer, new_nodes),
      doSetLearnRate: (new_learn) => this.doSetLearnRate(new_learn),
    }
  }
  

  doSetLearnRate = new_learn => {
    let new_network = new network();

    new_network.copy(this.state.network);
    new_network.setLearnRate(new_learn);
    this.setState(prevState => {
      return {
        network: new_network
      }
    })

  }


unhideModelPanel = () => {
  this.setState(prevState => {
    return {
      hideModelPanel: false,
    }
  })
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
        hideModelPanel: true,
        network: newNetwork,
        loadable: true
      }
    })
  }
  
/**
 * 
 * @param {*} layer numeric id of the layer
 * @param {*} new_act new activation function to be set
 */
  doSetActivation(layer, new_act){
    let new_network = new network();
    new_network.copy(this.state.network);
    
    new_network.arrLayers[layer].setActivation(new_act);
    this.setState(prevState => {
      return {
        network: new_network
      }
    })
  }

  doSetWeightInit(layer, new_weight){
    let new_network = new network();
    new_network.copy(this.state.network);
    
    new_network.arrLayers[layer].setWeightInit(new_weight);
    this.setState(prevState => {
      return {
        network: new_network
      }
    })
  }

  doSetNumNodes = (layer, new_num) =>{
    let new_network = new network();
    new_network.copy(this.state.network);
    
    new_network.arrLayers[layer].setNumNodes(new_num);
    this.setState(prevState => {
      return {
        network: new_network
      }
    })
  }
  render() {
    return (
      <div class="wrapper">
        {/* <button onClick={() => this.doSetActivation(0, "testAct")}>Test setActivation</button>
        <button onClick={() => this.doSetWeightInit(0, "testInit")}>test setInit</button> */}
        <button onClick={() => this.state.network.reportContent()}>Report Network</button>
        {/* <NetworkGraph appState={this.state}/> */}
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


