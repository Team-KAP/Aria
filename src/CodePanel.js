import React, { Component } from "react";
import "./CodePanel.css"

class CodePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // currentCode: "model = Sequential()",
            kerasCode: new Map(),
        }
        this.state.kerasCode.set("beginModel", "model = Sequential()");
        this.state.kerasCode.set("addLayer", "model.add(Dense(");
        this.state.kerasCode.set("input_dim", "input_dim=");
        this.state.kerasCode.set("compile", "model.compile(");
        this.state.kerasCode.set("losser", "loss=")
        this.state.kerasCode.set("optimizer", "optimizer=");
        this.state.kerasCode.set("metrics", "metrics=[");
        this.state.kerasCode.set("network_end", "))");
    }

    getActivationCode(layer) {
        return 'activation=' + "'" + layer.activation + "'";
    }



    doGetCode = (network) => {
        var code = "";
        code += this.state.kerasCode.get("beginModel") + "\n";
        for (let layer of network.arrLayers) {
            code += this.state.kerasCode.get("addLayer");
            code += layer.numNodes + ", ";
            if (layer.isFirstLayer === true) {
                code += this.state.kerasCode.get("input_dim") + layer.numNodes + ", ";
            }
            if (layer.activation != null) {
                code += this.getActivationCode(layer);
            }
            code += this.state.kerasCode.get("network_end") + "\n";
        }

        code += this.state.kerasCode.get("compile") + this.state.kerasCode.get("losser") + "'" + network.loss + "'" + ", " + this.state.kerasCode.get("optimizer") + "'" + network.optimizer +
            "'" + ", " + this.state.kerasCode.get("metrics") + "'" + network.metrics + "'" + "])"
        return code;
    }
    render() {
        return (
            <div class="codepanel">
                <h1>Code</h1>
                <p>{this.doGetCode(this.props.appState.network)}</p>
            </div>

        );
    }
}

export default CodePanel;