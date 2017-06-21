import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { CirclePicker } from 'react-color';
import './EditGoalModal.css';

class EditGoalModal extends Component {
  constructor(props) {
    super(props);
    // NOT USED YET

    //for some reason setting initial state is not working...
    // check out componentWillReceiveProps implementation - might help
    this.state = {
      color: this.props.goal ? this.props.goal.color : '',
      title: this.props.goal ? this.props.goal.title : ''
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.goal && ) {
  //     if (this.props.goal.title != nextProps.goal.title) {
  //       this.setState({ title: nextProps.goal.title });
  //     }
  //   }
  // }

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

  handleSave() {
    const update = {}

    if (this.state.color.length > 0) {
      update.color = this.state.color;
    }
    if (this.state.title.length > 0) {
      update.title = this.state.title;
    }
    if (this.props.goal && Object.keys(update).length) {
      //api requires req.body.id == goal._id
      update.id = this.props.goal._id;
      this.props.editGoal(this.props.goal._id, update);
    }
    this.handleCancel();
  }

  render() {
    console.log(this.props.goal, this.state);
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
            onClick={()=>this.handleSave()}>
            Save
          </button>
          <button
            className="btn btn-danger" onClick={()=>this.handleCancel()}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditGoalModal;
