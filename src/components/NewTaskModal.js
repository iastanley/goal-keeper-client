import React, { Component } from 'react';
import _ from 'lodash';
import { Modal } from 'react-bootstrap';
import './NewTaskModal.css';

class NewTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goalId: '',
      name: ''
    }
  }

  handleInputChange(name) {
    this.setState({ name });
  }

  handleGoalChange(goalId) {
    this.setState({ goalId });
  }

  handleCancel() {
    this.setState({
      name: '',
      goalId: ''
    });
    this.props.close()
  }

  handleSave(event) {
    event.preventDefault();
    this.props.createTask(this.state.goalId, {
      name: this.state.name,
      date: this.props.date
    });
    this.handleCancel();
  }

  render() {
    const goalTitles = _.map(this.props.goals, goal => {
      return (
        <option value={goal._id} key={goal._id}>{goal.title}</option>
      );
    });

    return (
      <Modal
        className="new-task-modal"
        show={this.props.show}
        onHide={this.props.close}>
        <Modal.Header closeButton>
          <h3>New Task</h3>
        </Modal.Header>
        <form>
        <Modal.Body>
          <div className="form-group">
            <label>Task Name</label>
            <input
              className="form-control"
              placeholder="Task Name"
              onChange={e => this.handleInputChange(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Group</label>
            <select
              className="form-control"
              defaultValue="default"
              onChange={e => this.handleGoalChange(e.target.value)}>
              <option disabled value="default">Choose a Group</option>
              {goalTitles}
            </select>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e)=>this.handleSave(e)}>
            Save
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={()=>this.handleCancel()}>
            Cancel
          </button>
        </Modal.Footer>
        </form>
      </Modal>
    );
  }

}

export default NewTaskModal;
