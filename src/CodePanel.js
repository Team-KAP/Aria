import React, { Component } from "react";
import "./CodePanel.css"
import {Form} from "react-bootstrap";

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
        this.state.kerasCode.set("modelfit", "model.fit(x=x_train, y=y_ytrain, epochs=")
        this.state.kerasCode.set("batch", "batch_size=")
        this.state.kerasCode.set("learnRate", "learning_rate=");
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
            "'" + ", " + this.state.kerasCode.get("metrics") + "'" + "accuracy" + "'" + "])" + ", " + this.state.kerasCode.get("learnRate") + this.state.kerasCode.get("network_end") + "\n";
        code += this.state.kerasCode.get("modelfit") + network.epochs + ", " + this.state.kerasCode.get("batch") + network.batchSize + this.state.kerasCode.get("network_end");
        return code;
    }
    render() {
        return (
            <div class="codepanel">
                <p>Generated Code</p> <br/>
                {/* <h1>Code</h1>
                <p>{this.doGetCode(this.props.appState.network)}</p> */}
                <p>{this.doGetCode(this.props.appState.network)}</p>
            {/* <Form id="codebox">
                <Form.Group controlId="codebox">
                     <Form.Label>Generated Code</Form.Label>
                     
                     <Form.Control as="textarea" rows="3" placeholder="test"/>
                     </Form.Group>
                </Form> */}

            {/* <input className="codepanel" type="text" value= {this.doGetCode(this.props.appState.network)}/> */}
            </div>

        );
    }
}

export default CodePanel;