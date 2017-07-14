import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import './InstructionsBanner.css';

class InstructionsBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alertVisible: true
    }
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    this.setState({
      alertVisible: false
    });
  }

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert className="instructions-banner" bsStyle="info" onDismiss={this.handleDismiss}>
          <p>To get started open the goals pane and create a new goal.</p>
        </Alert>
      );
    } else {
      return null;
    }
  }
} // end of InstructionBanner component

export default InstructionsBanner;
