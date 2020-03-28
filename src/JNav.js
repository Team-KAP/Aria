import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import BuildPanel from "./BuildPanel.js"

class JNav extends Component {
  constructor(props) {
    super(props);
    //set state goes here
  }

  render() {
    return (
      <Tabs defaultActiveKey="build" id="settings">
        <Tab eventKey="build" title="Build">
          <div>
          <p>o</p>
          <BuildPanel class="sidebar" />
          </div>
        </Tab>
        <Tab eventKey="learn" title="Learn">
          <div>
            <p>mega</p>
          </div>
        </Tab>
        <Tab eventKey="train" title="Train">
          <p>lul</p>
        </Tab>
      </Tabs>
    );
  }
}

export default JNav;











