

class network {

    constructor() {
        this.arrLayers = [];
        this.optimizer = null;
        this.metrics = null;
        this.loss = null;
        this.initializer = null;
    }

    set setOptimizer(newOptimizer) {
        this.optimizer = newOptimizer;
    }
    
    set setMetrics(newMetrics) {
        this.metrics = newMetrics;
    } 

    set setLoss(newLoss) {
        this.loss = newLoss; 
    }

    set setInit(newInit) {
        this.initializer = newInit;
    }

}

class layer {
    constructor(numNodes, activation, isFirstLayer, isLastLayer, layerID) {
        this.numNodes = numNodes; //temporary
        this.activation = "relu"; //default
        this.isFirstLayer = isFirstLayer;
        this.isLastLayer = isLastLayer;
        this.layerID = layerID;
    }
    set setNumNodes(newNode) {
        this.numNodes = newNode;
    }
    set setActivation(newActivation) {
        this.activation = newActivation;
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

function getActivationCode(layer) {
    return 'activation=' + "'" + layer.activation + "'";
}

function turntoString(array, network) {
    var code = "";
    code += kerasCode.get("beginModel") + "\n";
    for (let layer of array) {
        code += kerasCode.get("addLayer");
        code += layer.numNodes + ", ";
        if(layer.isFirstLayer == true) {
            code += kerasCode.get("input_dim") + layer.numNodes + ", ";
        }
        code += getActivationCode(layer);
        code += kerasCode.get("network_end") + "\n";
    }
    
    console.log(network.loss)
    code += kerasCode.get("compile") + kerasCode.get("losser") + "'" + network.loss + "'" + ", " + kerasCode.get("optimizer") + "'" + network.optimizer +
        "'" + ", " + kerasCode.get("metrics") + "'" + network.metrics + "'" +"])"
    return code;
}

// array = []
// temp = new layer(10, 'relu', true, false);
// temp1 = new layer(64, 'relu', false, false);
// temp3 = new layer(8, 'softmax', false, true);
// array.push(temp);
// array.push(temp1);
// array.push(temp3);

// let theNetwork = new network(array,  "binary_crossentropy", "adam", "accuracy");
// console.log(turntoString(array, theNetwork));