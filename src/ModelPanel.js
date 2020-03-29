import React, { Component } from "react";
// @ts-ignore 
import { Sigma, RandomizeNodePositions, RelativeSize } from 'react-sigma';
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

    const maxNodeCount = getMaxNodeCount(arrLayers);

    const graph = {};
    const nodes = [];
    const edges = [];
    let prevLayerNodes = []; // cache

    for (let i = 0; i < arrLayers.length; i++) {

        const layer = arrLayers[i];
        const nodeCount = layer.numNodes;

        const x = i * 0.2;
        const vgap = 0.15 - nodeCount / 200;
        const renderHeight = (nodeCount - 1) * vgap;
        const initY = (2.0 - renderHeight) / 2;

        const thisLayerNodes = [];

        for (let j = 0; j < nodeCount; j++) {

            let y = initY + j * vgap;
            let id = i + "," + j;
            let size = 1;

            const node = { x: x, y: y, size: size, id: id };
            nodes.push(node);
            thisLayerNodes.push(node);
        }

        if (prevLayerNodes) {
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

        const prevNode = prevLayerNodes[i];
        let source = prevNode.id;

        for (let j = 0; j < thisLayerNodes.length; j++) {

            const thisNode = thisLayerNodes[j];

            let id = "e_" + prevNode.id + "," + thisNode.id;
            let target = thisNode.id;
            let size = 1 - (prevLayerNodes.length * thisLayerNodes.length) / 100;

            const edge = { id: id, source: source, target: target, size: size };
            edges.push(edge);

        }
    }

}

function genLayers() {
    let arrLayers = [];
    let temp3 = new layer(2, 'softmax', false, true);
    let temp4 = new layer(6, 'softmax', false, true);
    let temp5 = new layer(8, 'softmax', false, true);
    let temp56 = new layer(4, 'softmax', false, true);
    let temp6 = new layer(1, 'softmax', false, true);
    arrLayers.push(temp3, temp5, temp4, temp56, temp6);
    return arrLayers;
}

class UpdateNodeProps extends Component {
    componentWillReceiveProps({ sigma, nodes }) {
        sigma.graph.nodes().forEach(n => {
          var updated = nodes.find(e => e.id == n.id)
          Object.assign(n, updated)
        })
    }

    render = () => null
}



class ModelPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let layers = this.props.appState.network.arrLayers;
        //let layers = genLayers();
        console.log(layers);
        let g = layersToGraph(layers);
        console.log(g);

        // zoomMax: 0.1, 

        
        return (
            <div id="content">
                <h1>Model</h1>
                <div style={{ backgroundColor: "#333", height: "90%" }}>
                    <Sigma graph={g} style={{ height: "100%" }}
                    settings={{
                        maxNodeSize: 15, maxEdgeSize: 0.3,
                        clone: false, defaultNodeColor: "#fff"
                    }}>

                    <UpdateNodeProps nodes={g.nodes}/>
                </Sigma>
                </div>
            </div>

        );

    }
}

export default ModelPanel;