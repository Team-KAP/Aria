import React, { Component } from "react";

// @ts-ignore 
import { Sigma} from 'react-sigma';

import { layer } from './kerasCode.js'

function getMaxNodeCount(arrLayers) {
    let max = 0;
    for (let layer of arrLayers) {
        let nodeCount = layer.numNodes;
        if (nodeCount > max) max = nodeCount;
    }
    return max;
}

function layersToGraph(arrLayers) {

    let maxNodeCount = getMaxNodeCount(arrLayers);

    let graph = {};
    let nodes = [];
    let edges = [];
    let prevLayerNodes = []; // cache

    for (let i = 0; i < arrLayers.length; i++) {

        let layer = arrLayers[i];
        let nodeCount = layer.numNodes;

        let x = i * 0.2;
        let vgap = 0.15 - nodeCount / 200;
        let renderHeight = (nodeCount - 1) * vgap;
        let initY = (2.0 - renderHeight) / 2;

        let thisLayerNodes = [];

        for (let j = 0; j < nodeCount; j++) {

            let y = initY + j * vgap;
            let id = i + "," + j;
            let size = 1;

            let node = { x: x, y: y, size: size, id: id };
            nodes.push(node);
            thisLayerNodes.push(node);
        }

        if (prevLayerNodes.length > 0) { // TODO check this??
            connect(prevLayerNodes, thisLayerNodes, edges);
        }

        prevLayerNodes = thisLayerNodes;

    }

    graph.nodes = nodes;
    graph.edges = edges;
    return graph;

}

function connect(prevLayerNodes, thisLayerNodes, edges) {

    for (let i = 0; i < prevLayerNodes.length; i++) {

        let prevNode = prevLayerNodes[i];
        let source = prevNode.id;

        for (let j = 0; j < thisLayerNodes.length; j++) {

            let thisNode = thisLayerNodes[j];

            let id = "e_" + prevNode.id + "," + thisNode.id;
            let target = thisNode.id;
            let size = 1 - (prevLayerNodes.length * thisLayerNodes.length) / 100;

            let edge = { id: id, source: source, target: target, size: size };
            edges.push(edge);

        }
    }

}

// function genLayers() {
//     let arrLayers = [];
//     let temp3 = new layer(2, 'softmax', false, true);
//     let temp4 = new layer(6, 'softmax', false, true);
//     let temp5 = new layer(8, 'softmax', false, true);
//     let temp56 = new layer(4, 'softmax', false, true);
//     let temp6 = new layer(1, 'softmax', false, true);
//     arrLayers.push(temp3, temp5, temp4, temp56, temp6);
//     return arrLayers;
// }

function getSigma(data) {
    console.log("rendering using data: ");
    console.log(data);
    let s = <Sigma 
        graph={data} 
        style={{ height: "100%" }}
        settings={{
            maxNodeSize: 15, maxEdgeSize: 0.3,
            clone: false, 
            defaultNodeColor: "#fff"
        }}>
    </Sigma>
    return s;
}

export class ModelPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        // let r = parseInt(Math.random() * 5);
        // let preloaded = layersToGraph(genLayers().slice(0, 5));

        let layers = this.props.appState.network.arrLayers;
        let g = layersToGraph(layers);

        // console.log("preloaded");
        // console.log(preloaded);
        console.log("g");
        console.log(g);

        if (!this.props.appState.hideModelPanel) {
                
            return (
                <div id="content">
                    <h1>Model</h1>
                    <div style={{ backgroundColor: "#333", height: "90%" }}>                   
                        {getSigma(g)}
                    </div>
                </div>

            );

        }  else {
            this.props.appState.unhideModelPanel(); // re-render!
            return false;
        }

    }
}

