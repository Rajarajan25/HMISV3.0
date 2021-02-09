import React from "react";
import {Tab, Tabs, Nav, Col, Row} from "react-bootstrap";

export  class PatientDetailsTab extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "home"
    };
  }

  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="home" title="Home">
          Be wise as thou art cruel; do not press My tongue-tied patience with
          too much disdain; Lest sorrow lend me words, and words express The
          manner of my pity-wanting pain. If I might teach thee wit, better it
          were, Though not to love, yet, love to tell me so;-- As testy sick
          men, when their deaths be near, No news but health from their
          physicians know;-- For, if I should despair, I should grow mad, And in
          my madness might speak ill of thee;
        </Tab>
        <Tab eventKey="profile" title="Profile">
          For shame! deny that thou bear'st love to any, Who for thy self art so
          unprovident. Grant, if thou wilt, thou art belov'd of many, But that
          thou none lov'st is most evident: For thou art so possess'd with
          murderous hate, That 'gainst thy self thou stick'st not to conspire,
          Seeking that beauteous roof to ruinate Which to repair should be thy
          chief desire. O! change thy thought, that I may change my mind: Shall
          hate be fairer lodg'd than gentle love?
        </Tab>
        <Tab eventKey="contact" title="Contact">
          For shame! deny that thou bear'st love to any, Who for thy self art so
          unprovident. Grant, if thou wilt, thou art belov'd of many, But that
          thou none lov'st is most evident: For thou art so possess'd with
          murderous hate, That 'gainst thy self thou stick'st not to conspire,
          Seeking that beauteous roof to ruinate Which to repair should be thy
          chief desire. O! change thy thought, that I may change my mind: Shall
          hate be fairer lodg'd than gentle love?
        </Tab>
      </Tabs>
    );
  }
}

export default PatientDetailsTab;