import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown'

class BuildPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 13,
            input: 12,
            value: 0,
            setValue: 0,
            currentActivation: "<select activation function>",
            currentInit: "<select weight initializer",
            activations: [
                "<select activation function>", "relu", "tanh", "sigmoid", "softmax"
            ],
            inits: [
                "<select weight initializer", "zeros", "ones", "normal", "uniform", "glorot uniform", "he uniform"
            ]
        }
    }

    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">Activation</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.state.activations.map(activation => {
                            return(
                                <Dropdown.Item as="button" 
                                onClick={() => this.setState({currentActivation: activation})}
                                    >{activation}</Dropdown.Item>
                            )
                        })}                        
                    </Dropdown.Menu>
                </Dropdown>
                <br/>
                        <p>{this.state.currentActivation}</p>
                <br/>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">Weight Initializer</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.state.inits.map(init => {
                            return(
                                <Dropdown.Item as="button" 
                                onClick={() => this.setState({currentInit: init})}>{init}</Dropdown.Item>
                            )
                        })
                    }
                    </Dropdown.Menu>
                </Dropdown>
                <br/>
                        <p>{this.state.currentInit}</p>
                <br/>
            </div>
        );
    }
}


export default BuildPanel;
