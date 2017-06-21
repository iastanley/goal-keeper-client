import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { CirclePicker } from 'react-color';
import './EditGoalModal.css';

class EditGoalModal extends Component {
  constructor(props) {
    super(props);
    // NOT USED YET

    //for some reason setting initial state is not working...
    this.state = {
      color: this.props.goal ? this.props.goal.color : '',
      title: this.props.goal ? this.props.goal.title : ''
    }
  }

  handleTitleChange(title) {
    this.setState({title});
  }

  handleColorChange(color) {
    this.setState({color});
  }
  render() {
    return (
      <Modal
        className="edit-goal-modal"
        show={this.props.show}
        onHide={this.props.close}>
        <Modal.Header closeButton>
          <h3>Edit Goal</h3>
        </Modal.Header>
        <Modal.Body>
        <form>
          <div className="form-group">
            <label>Goal Title</label>
            <input
              className="form-control"
              defaultValue={this.props.goal ? this.props.goal.title : ''}
              onChange={event => this.handleTitleChange(event.target.value)}/>
          </div>
          <div className="form-group color-picker-input">
            <label>Pick a Color</label>
            <div className="color-container">
              <CirclePicker color={this.state.color}/>
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

export default EditGoalModal;
