import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import BuildPanel from "./BuildPanel.js"
import LearnPanel from "./LearnPanel.js"

class JNav extends Component {
  constructor(props) {
    super(props);
    //set state goes here
  }

  render() {
    return (
      <div id="sidebar">
        <Tabs defaultActiveKey="build" id="settings">
          <Tab eventKey="build" title="Build">
            <div>
            <BuildPanel {...this.props} />
            </div>
          </Tab>
          <Tab eventKey="learn" title="Learn">
            <div>
            <LearnPanel {...this.props} />
            </div>
          </Tab>
          <Tab eventKey="train" title="Train">
            <p>lul</p>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default JNav;











