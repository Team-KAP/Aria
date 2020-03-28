class layer {
    constructor(numNodes, activation, isFirstLayer, isLastLayer) {
        this.numNodes = numNodes; //temporary
        this.activation = "relu"; //default
        this.isFirstLayer = isFirstLayer;
        this.isLastLayer = isLastLayer;

    }
    get thenumNodes() {
        return this.numNodes;
    }
    get theloss() {
      return this.loss;
    }
}

class network {
    constructor(arrLayers, optimizer, metrics, loss) {
        this.arrLayers = arrLayers;
        this.optimizer = optimizer;
        this.metrics = metrics;
        this.loss = loss;
    }
}

let kerasCode = new Map();
kerasCode.set("beginModel", "model = Sequential()");
kerasCode.set("addLayer", "model.add(Dense(");
kerasCode.set("input_dim", "input_dim=");
kerasCode.set("compile", "model.compile(");
kerasCode.set("losser", "loss=")
kerasCode.set("optimizer", "optimizer=");
kerasCode.set("metrics", "metrics=[");
kerasCode.set("network_end", "))");
  
function getActivationCode(activation) {
    return 'activation=' + "'" + activation + "'";
}

function turntoString(array) {
    var code = "";
    code += kerasCode.get("beginModel") + "\n";
    for (let layer of array) {
        code += kerasCode.get("addLayer");
        code += layer.thenumNodes + ", ";
        if(layer.isFirstLayer == true) {
            code += kerasCode.get("input_dim") + layer.thenumNodes + ", ";
        }
        code += getActivationCode(layer.activation);
        code += kerasCode.get("network_end") + "\n";
    }
    console.log(network.loss)
    code += kerasCode.get("compile") + kerasCode.get("losser") + "'" + network.loss + "'" + ", " + kerasCode.get("optimizer") + "'" + network.optimizer + 
    "'" + ", " + kerasCode.get("metrics") + "'" + network.metrics + "'" +"])"
    return code;
}

array = []
temp = new layer(10, 'relu', true, false);
temp1 = new layer(64, 'relu', false, false);
temp3 = new layer(8, 'softmax', false, true);
array.push(temp);
array.push(temp1);
array.push(temp3);

let theNetwork = new network(array,  "binary_crossentropy", "adam", "accuracy");
console.log(turntoString(array)) true, true, true);
array.push(temp);
console.log(turntoString(array))