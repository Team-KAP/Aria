import React from 'react';
import logo from './logo.svg';
import './App.css';
class Layer {
  constructor(num_nodes, activation, nextLayer, prevLayer){
    num_nodes = 64; //temporary
    activation = "relu"; //default
    nextLayer = null;
    prevLayer = null;
  }
}

class network {
  constructor(inputLayers, hiddenLayers, outputLayers) {

  }
}

function App() {
  let kerasCode = new Map();
  kerasCode.set("model", "model = Sequential()");
  kerasCode.set("relu", ", activation="relu"") 
  kerasCode.set("end", "))");
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          OMEGALUL
        </p>
      </header>
    </div>
  );
}

export default App;


