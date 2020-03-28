import React, { Component } from "react";
import Form from 'react-bootstrap/Form'

class BuildPanel extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Form>
            <Form.Group controlId="formBasicRange">
                <Form.Label>Range</Form.Label>
                <Form.Control type="range" inputRef={ref => { this.myInput = ref;}}/>
            </Form.Group>
            </Form>
        );
    }
}

export default BuildPanel;
