import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { CirclePicker } from 'react-color';
import './NewGoalModal.css';

class NewGoalModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      title: '',
      color: ''
    }
  }

  handleInputChange(title){
    this.setState({ title });
  }

  handleColorChange(color) {
    this.setState({ color: color.hex });
  }

  handleCancel() {
    this.setState({
      title: '',
      color: ''
    });
    this.props.close();
  }

  handleSave() {
    this.props.createGoal(this.state);
    this.handleCancel();
  }

  render() {
    console.log(this.state);
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
            <input
              className="form-control"
              placeholder="Title of Goal"
              onChange={e => this.handleInputChange(e.target.value)}/>
          </div>
          <div className="form-group color-picker-input">
            <label>Pick a Color</label>
            <div className="color-container">
              <CirclePicker
                color={this.state.color}
                onChangeComplete={color => this.handleColorChange(color)}/>
            </div>

          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-primary"
            onClick={() => this.handleSave()}>
            Save
          </button>
          <button
            className="btn btn-danger" onClick={() => this.handleCancel()}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default NewGoalModal;
