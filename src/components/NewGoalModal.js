import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { CirclePicker } from 'react-color';
import './NewGoalModal.css';

class NewGoalModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  handleSave(event) {
    event.preventDefault();
    if (!this.state.title) {
      this.props.setGoalError('Please provide a goal title.');
    } else if (!this.state.color) {
      this.props.setGoalError('Please select a goal color.');
    } else {
      this.props.createGoal({
          user: this.props.user,
          title: this.state.title,
          color: this.state.color
      });
      this.handleCancel();
    }
  }

  render() {
    let goalHeader;

    if (this.props.isLoading) {
      goalHeader = <h3>Loading...</h3>;
    } else if (this.props.goalError) {
      goalHeader = (
        <h3 style={{color: '#f00'}}>
          {this.props.goalError.message ? this.props.goalError.message : this.props.goalError}
        </h3>
      );
    } else {
      goalHeader = <h3>New Goal</h3>
    }

    return (
      <Modal
        className="new-goal-modal"
        show={this.props.show}
        onHide={this.props.close}>
        <Modal.Header closeButton>
          {goalHeader}
        </Modal.Header>
        <form>
        <Modal.Body>
          <div className="form-group">
            <label>Goal Title</label>
            <input
              className="form-control"
              placeholder="Title of Goal"
              value={this.state.title}
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
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            className="btn btn-primary save-btn"
            onClick={(e) => this.handleSave(e)}>
            Save
          </button>
          <button
            type="button"
            className="btn btn-default cancel-btn"
            onClick={() => this.handleCancel()}>
            Cancel
          </button>
        </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

export default NewGoalModal;
