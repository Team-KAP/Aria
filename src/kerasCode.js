export class network {
    constructor() {
        this.arrLayers = [];
        this.optimizer = 0;
        this.learnRate = 0;
        this.loss = 0;
        this.epochs = 0;
        this.batchSize = 0;
    }


    copy(old_network){
        // console.log("keys of old:");
        // console.log(Object.keys(old_network));
        this.arrLayers = old_network.arrLayers;
        this.optimizer = old_network.optimizer;
        this.learnRate = old_network.learnRate;
        this.loss = old_network.loss;
        this.epochs = old_network.loss;
        this.batchSize = old_network.batchSize;
        this.reportContent();
    }

    setOptimizer(newOptimizer){
        this.optimizer = newOptimizer;
    }

    reportContent() {
        console.log("REPORTING NETWORK")
        console.log(this.arrLayers);
        console.log("optimizer: " + String(this.optimizer));
        console.log("metrics: " + String(this.learnRate));
        console.log("loss: " + String(this.loss));
        console.log("epochs: " + String(this.epochs));
        console.log("Batch Size: " + String(this.batchSize));
        console.log(" ");
    }

     setBatchSize(newBatch) {
         this.batchSize = newBatch;
     }
     setLearnRate(newLearn) {
         this.learnRate = newLearn;
     } 

     setLoss(newLoss) {
         this.loss = newLoss; 
     }

     setEpochs(newEpochs) {
         this.epochs = newEpochs;
     }

    // setInit(newInit) {
    //     this.initializer = newInit;
    // }
    addLayer(newLayer) {
        this.arrLayers.push(newLayer);
    }

    // this.doSomething = function () {
    //     console.log(1);
    // }

}

export class layer {
    constructor(numNodes, activation, isFirstLayer, isLastLayer, weightInit) {
        this.numNodes = numNodes; //temporary
        this.activation = activation; //default
        this.isFirstLayer = isFirstLayer;
        this.weightInit = weightInit;
        //this.isLastLayer = isLastLayer;
    }
    setWeightInit(newWeight) {
        this.weightInit = newWeight;
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
}

function getActivationCode(layer) {
    return 'activation=' + "'" + layer.activation + "'";
}



// let new_layer = new layer(10, 'relu', true, false);
// let new_layer1 = new layer(10, 'relu', false, false);
// let networks = new network();
// networks.addLayer(new_layer);
// networks.addLayer(new_layer1);

// console.log(turntoString(networks));
