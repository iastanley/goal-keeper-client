import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { CirclePicker } from 'react-color';
import './NewGoalModal.css';

class NewGoalModal extends Component {
  constructor(props) {
    super(props);
    // NOT USED YET
    this.state = {
      color: "#607d8b"
    }
  }
  render() {
    return (
      <Modal
        className="new-goal-modal"
        show={this.props.show}
        onHide={this.props.close}>
        <Modal.Header closeButton>
          <h3>New Goal</h3>
        </Modal.Header>
        <Modal.Body>
        <form>
          <div className="form-group">
            <label>Goal Title</label>
            <input className="form-control" placeholder="Title of Goal"/>
          </div>
          <div className="form-group color-picker-input">
            <label>Pick a Color</label>
            <div className="color-container">
              <CirclePicker />
            </div>

          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-primary"
            onClick={this.props.close}>
            Save
          </button>
          <button
            className="btn btn-danger" onClick={this.props.close}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default NewGoalModal;
