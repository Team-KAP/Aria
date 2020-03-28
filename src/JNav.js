import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


class JNav extends Component {
  constructor(props) {
    super(props);
    //set state goes here
  }

  render() {
    return (
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <p>stfu</p>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <p>omega</p>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <p>lul</p>
        </Tab>
      </Tabs>
    );
  }
}

export default JNav;











