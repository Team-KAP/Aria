import React, { Component } from "react";
import {Form} from "react-bootstrap";
class TrainPanel extends Component {
    render() {
        return (
            <div>
                <br />
                <p>
                    TrainPanel
            </p>
                <Form>
                    <Form.Group controlId="formBasicRange">
                        <Form.Label>Range</Form.Label>
                        <Form.Control type="range" />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default TrainPanel;