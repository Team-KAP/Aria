import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown'

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
    }
    
    render() {
        return (
            <div>
                <p>test</p>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">Optimizer</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.state.optimizers.map(opti => {
                            return(
                                <Dropdown.Item as="button" 
                                onClick={() => this.setState({currentOpti: opti})}
                                    >{opti}</Dropdown.Item>
                            )
                        })}                        
                    </Dropdown.Menu>
                </Dropdown>
                <br/>
                        <p>{this.state.currentOpti}</p>
                <br/>
            </div>
        );
    }
}


export default LearnPanel;
