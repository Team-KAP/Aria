import React, { Component } from "react";
import "./CodePanel.css"

class CodePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCode: "model = Sequential()"
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

    doGetCode = (network) => {
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
    render() {
        return (
            <div class="codepanel">
                <h1>Code</h1>
                <p>{this.state.currentCode}</p>
            </div>

        );
    }
}

export default CodePanel;