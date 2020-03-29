import React, { Component } from "react";
// @ts-ignore 
import {Sigma, RandomizeNodePositions, RelativeSize} from 'react-sigma';

//function()


class ModelPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {        }

    }

    render() {
        let myGraph = {
            "nodes": [
              {
                "id": "n0",
                "x": 0,
                "y": 0,
                "size": 3
              },
              {
                "id": "n1",
                "x": 3,
                "y": 1,
                "size": 2
              },
              {
                "id": "n2",
                "x": 1,
                "y": 3,
                "size": 1
              }
            ],
            "edges": [
              {
                "id": "e0",
                "source": "n0",
                "target": "n1"
              },
              {
                "id": "e1",
                "source": "n1",
                "target": "n2"
              },
              {
                "id": "e2",
                "source": "n2",
                "target": "n0"
              }
            ]
        }


        return (
            <div>
                <h1>Model</h1>
                <Sigma graph={myGraph} settings={{drawEdges: true, clone: false, 
                    defaultNodeColor: "#fff",}}>
                    
                    
                </Sigma>
            </div>

        );
    }
}

export default ModelPanel;