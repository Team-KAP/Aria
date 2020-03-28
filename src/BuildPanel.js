import React, { Component } from "react";
import ReactBootstrapSlider from "react-bootstrap-slider";

class BuildPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 13,
            input: 12,
            value: 0,
            setValue: 0
        }
    }

    setValue = (val => this.setState({ value: val }))



    changeValue(event) {
        console.log("Current Value is ", event.target.value);
    }

    render() {
        console.log("stfu2")
        return (
            <div>
                {/* <RangeSlider
                    value={this.state.value}
                    onChange={changeEvent => this.state.value = changeEvent.target.value}
                /> */}
                {/* <Form>
                    <Form.Group controlId="formBasicRange">
                        <Form.Label>Range</Form.Label>
                        <Form.Control type="range"
                            onChange={stfu()}
                            onwefoiJESeange={console.log("stfu rn")} />
                    </Form.Group>
                </Form>
                <p>{this.state.input}</p> */}
                <ReactBootstrapSlider
                    value={this.state.currentValue}
                    step={100}
                    change={this.changeValue}
                    slideStop={this.changeValue}
                    max={10000}
                    min={0}
                    orientation="horizontal"
                    reverse={true}
                />

            </div>
        );
    }
}


export default BuildPanel;
