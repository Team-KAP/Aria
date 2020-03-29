import React, { Component } from "react";
import "./CodePanel.css"
class CodePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCode: "model = Sequential()"
        }

    }
    render() {
        return (
            <div class="codepanel">
                <h1>Code</h1>
                <p>{this.state.currentCode}</p>
            </div>

        );
    }
}

export default CodePanel;