import React, { Component } from "react";
import { Form } from "react-bootstrap";
class TrainPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <br />
                <Form>
                    <Form.Group controlId="formBasicRange">
                        <Form.Label>Epochs</Form.Label>
                        <Form.Control type="range" onChange={this.handleChange} />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default TrainPanel;