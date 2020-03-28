//import React from 'react';
//import './App.js';

class layer {
    constructor(num_nodes, activation, isFirstLayer, nextLayer, prevLayer) {
      num_nodes = 64; //temporary
      activation = "relu"; //default
      isFirstLayer = this.isFirstLayer;
      nextLayer = null;
      prevLayer = null;
    }
  }

let kerasCode = new Map();
kerasCode.set("beginModel", "model = Sequential()");
kerasCode.set("addLayer", "model.add(Dense(");
kerasCode.set("input_dim", ", input_dim=")
kerasCode.set("end", "))");
  
function getActivationCode(activation) {
    return 'activation=' + activation + "'";
}

function turntoString(array) {
    var code = "";
    code += kerasCode.get("beginModel") + "\n";
    for (layer in array) {
        code += kerasCode.get("addLayer");
        code += layer.num_nodes;
        if(layer.isFirstLayer) {
            code += kerasCode.get("input_dim") + layer.num_nodes + "\n";
        }
        code += getActivationCode(layer.activation)  + "\n";
    }
    return code;
}

let array = []
let temp = new layer(10, 'relu', true, true, false);
array.push(temp);
console.log(turntoString(array))