import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import { Form } from "react-bootstrap";

class LearnPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 13,
            input: 12,
            value: 0,
            setValue: 0,
            currentOpti: "<select optimizer>",
            optimizers: [
                "<select optimizer>", "SGD", "RMSProp", "Adadelta", "Adam"
            ],
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // this.setState({ unitSliderValue: event.target.value });
        // this.props.appState.selectedLayer
        if (this.props.appState.loadable) {
            this.props.appState.doSetLearnRate(event.target.value)
        }
    }
    
    render() {
        return (
            <div>
                {/* <button onClick={() => this.props.appState.doSetOptimizer()}>Hi</button> */}
                <br/>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">Optimizer</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.state.optimizers.map(opti => {
                            return(
                                <Dropdown.Item as="button" 
                                onClick={() => {
                                    this.setState({currentOpti: opti});
                                    this.props.appState.doSetOptimizer(opti);
                                }}
                                    >{opti}</Dropdown.Item>
                            )
                        })}                        
                    </Dropdown.Menu>
                </Dropdown>
                <br/>
                        <p>{this.state.currentOpti}</p>
                <br/>
                <Form>
                    <Form.Group controlId="formBasicRange">
                        <Form.Label>Learning rate of the network: {this.props.appState.loadable ? this.props.appState.network.learnRate : ""}</Form.Label>
                        <Form.Control type="range" 
                        onChange={this.handleChange} 
                        max="0.1" 
                        step="0.001"
                        value={this.props.appState.network.learnRate} />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}


export default LearnPanel;
