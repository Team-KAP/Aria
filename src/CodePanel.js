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
                <p>{this.state.currentCode}</p>
            </div>

        );
    }
}

export default CodePanel;