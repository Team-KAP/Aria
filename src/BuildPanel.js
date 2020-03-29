import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import { Form } from "react-bootstrap";

class BuildPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 13,
            input: 12,
            value: 0,
            setValue: 0,
            currentActivation: "<select activation function>",
            currentInit: "<select weight initializer>",
            activations: [
                "<select activation function>", "relu", "tanh", "sigmoid", "softmax"
            ],
            inits: [
                "<select weight initializer>", "zeros", "ones", "normal", "uniform", "glorot uniform", "he uniform"
            ],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // this.props.appState.selectedLayer
        if (this.props.appState.loadable) {
            this.props.appState.doSetNumNodes(this.props.appState.selectedLayer, event.target.value)
        }
    }

    render() {
        return (
            <div>
                <br />
                <p>Currently selected layer: {this.props.appState.selectedLayer}</p>
                <Button variant="primary" onClick={() => {
                    console.log("adding layer");
                    this.props.appState.doAddLayer();
                }}>Add Layer</Button>{' '}
                <br />
                <br />
                <Form>
                    <Form.Group controlId="formBasicRange">
                        <Form.Label>Number of nodes in layer : {this.props.appState.loadable ? this.props.appState.network.arrLayers[this.props.appState.selectedLayer].numNodes : ""}</Form.Label>
                        <Form.Control type="range" onChange={this.handleChange} />
                    </Form.Group>
                </Form>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">Activation</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.state.activations.map(activation => {
                            return (
                                <Dropdown.Item as="button"
                                    onClick={() => {
                                        this.setState({ currentActivation: activation });
                                        this.props.appState.doSetActivation(this.props.appState.selectedLayer, activation);
                                    }}
                                >{activation}</Dropdown.Item>
                            )
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                <br />
                <p>{this.props.appState.loadable ? this.props.appState.network.arrLayers[this.props.appState.selectedLayer].activation : ""}</p>
                <br />
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">Weight Initializer</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.state.inits.map(init => {
                            return (
                                <Dropdown.Item as="button"
                                    onClick={() => {
                                        this.setState({ currentInit: init });
                                        this.props.appState.doSetWeightInit(this.props.appState.selectedLayer, init);
                                    }}>{init}</Dropdown.Item>
                            )
                        })
                        }
                    </Dropdown.Menu>
                </Dropdown>
                <br />
                <p><p>{this.props.appState.loadable ? this.props.appState.network.arrLayers[this.props.appState.selectedLayer].weightInit : ""}</p></p>
                <br />
            </div>
        );
    }
}


export default BuildPanel;
