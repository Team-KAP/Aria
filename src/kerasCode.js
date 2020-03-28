//import React from 'react';
//import './App.js';

function layer(num_nodes, activation, isFirstLayer) {
    this.num_nodes = num_nodes; //temporary
    this.activation = "relu"; //default
    this.isFirstLayer = isFirstLayer;
    this.nextLayer = null;
    this.prevLayer = null;
    
  }

let kerasCode = new Map();
kerasCode.set("beginModel", "model = Sequential()");
kerasCode.set("addLayer", "model.add(Dense(");
kerasCode.set("input_dim", ", input_dim=")
kerasCode.set("end", "))");
  
function getActivationCode(activation) {
    return 'activation=' + "'" + activation + "'";
}

function turntoString(array) {
    var code = "";
    code += kerasCode.get("beginModel") + "\n";
    for (layer in array) {
        code += kerasCode.get("addLayer");
        code += layer.num_nodes;
        code += kerasCode.get("addLayer");
        code += layer.getNumNodes();
        if(layer.isFirstLayer == true) {
            code += kerasCode.get("input_dim") + layer.num_nodes + "\n";
        }
        code += getActivationCode(layer.activation);
        code += kerasCode.get("end") + "\n";
    }
    return code;
}

let array = []
let temp = new layer(10, 'relu', true, true, true);
array.push(temp);
console.log(turntoString(array))