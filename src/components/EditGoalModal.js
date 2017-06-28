import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { CirclePicker } from 'react-color';
import './EditGoalModal.css';

class EditGoalModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
      title: ''
    }
  }

  // update state with selected goal after component loads
  componentWillReceiveProps(nextProps) {
    if (nextProps.goal) {
      this.setState({
        title: nextProps.goal.title,
        color: nextProps.goal.color
      });
    }
  }

  handleTitleChange(title) {
    this.setState({title});
  }

  handleColorChange(color) {
    this.setState({ color: color.hex });
  }

  handleCancel() {
    this.setState({
      color: '',
      title: ''
    });
    this.props.close();
  }

  handleSave(event) {
    event.preventDefault();
    if (!this.state.title) {
      this.props.setGoalError('Missing goal title.');
    } else if (!this.props.goal || !this.state.color) {
      this.props.setGoalError('Something went wrong! Try again.');
    } else {
      const update = {
        id: this.props.goal._id,
        color: this.state.color,
        title: this.state.title
      }
      this.props.editGoal(this.props.goal._id, update);
      this.handleCancel();
    }
  }

  handleDelete() {
    this.props.deleteGoal(this.props.goal._id);
    this.handleCancel();
  }

  render() {
    let editHeader;

    if (this.props.isLoading) {
      editHeader = <h3>Loading...</h3>;
    } else if (this.props.goalError) {
      editHeader = (
        <h3 style={{color: '#f00'}}>
          {this.props.goalError.message ? this.props.goalError.message : this.props.goalError}
        </h3>
      );
    } else {
      editHeader = <h3>Edit Goal</h3>
    }
    return (
      <Modal
        className="edit-goal-modal"
        show={this.props.show}
        onHide={()=>this.handleCancel()}>
        <Modal.Header closeButton>
          {editHeader}
        </Modal.Header>
        <form>
          <Modal.Body>
            <div className="form-group">
              <label>Goal Title</label>
              <input
                className="form-control"
                value={this.state.title}
                onChange={event => this.handleTitleChange(event.target.value)}/>
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
              type="button"
              className="btn btn-danger btn-goal-delete"
              onClick={()=>this.handleDelete()}>
              Delete Goal
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e)=>this.handleSave(e)}>
              Save
            </button>
            <button
              type="button"
              className="btn btn-default" onClick={()=>this.handleCancel()}>
              Cancel
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

export default EditGoalModal;
