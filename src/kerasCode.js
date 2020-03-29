export class network {
    constructor() {
        this.arrLayers = [];
        this.optimizer = 0;
        this.metrics = 0;
        this.loss = 0;
        // this.initializer = 0;
    }


    copy(old_network){
        console.log("keys of old:");
        console.log(Object.keys(old_network));
        this.arrLayers = old_network.arrLayers;
        this.optimizer = old_network.optimizer;
        this.metrics = old_network.metrics;
        this.loss = old_network.loss;
        this.initializer = old_network.initializer;
    }

    setOptimizer(newOptimizer){
        this.optimizer = newOptimizer;
    }

    reportContent() {
        console.log(this.arrLayers);
        console.log(this.optimizer);
        console.log(this.metrics);
        console.log(this.loss);
        // console.log(this.initializer);
        console.log(" ");
    }

    // setMetrics(newMetrics) {
    //     this.metrics = newMetrics;
    // } 

    // setLoss(newLoss) {
    //     this.loss = newLoss; 
    // }

    // setInit(newInit) {
    //     this.initializer = newInit;
    // }
    // addLayer(newLayer) {
    //     this.arrLayers.push(newLayer);
    // }

    // this.doSomething = function () {
    //     console.log(1);
    // }

}

export class layer {
    constructor() {
        this.numNodes = null //temporary
        this.activation = null //default
        this.isFirstLayer = null
        this.isLastLayer = null
    }
    setNumNodes(newNode) {
        this.numNodes = newNode;
    }
    setActivation(newActivation) {
        this.activation = newActivation;
    }
    setisFirstLayer(newBool) {
        this.isFirstLayer = newBool;
    }
    setisLastLayer(newBool) {
        this.isLastLayer = newBool;
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

function turntoString(network) {
    var code = "";
    code += kerasCode.get("beginModel") + "\n";
    for (let layer of network.arrLayers) {
        code += kerasCode.get("addLayer");
        code += layer.numNodes + ", ";
        if (layer.isFirstLayer === true) {
            code += kerasCode.get("input_dim") + layer.numNodes + ", ";
        }
        if (layer.activation != null) {
            code += getActivationCode(layer);
        }
        code += kerasCode.get("network_end") + "\n";
    }

    code += kerasCode.get("compile") + kerasCode.get("losser") + "'" + network.loss + "'" + ", " + kerasCode.get("optimizer") + "'" + network.optimizer +
        "'" + ", " + kerasCode.get("metrics") + "'" + network.metrics + "'" + "])"
    return code;
}

// array = []
// temp = new layer();
// let networks = new network()
// networks.optimizer = "adam";
// temp3 = new layer(8, 'softmax', false, true);
// networks.arrLayers.push(temp3)
// turntoString(networks);

