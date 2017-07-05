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
    if (!this.state.name) {
      this.props.setGoalError('Please provide a task name.');
    } else if (!this.state.goalId) {
      this.props.setGoalError('Please select a goal for this task.');
    } else {
      this.props.createTask(this.state.goalId, {
        name: this.state.name,
        date: this.props.date
      });
      this.handleCancel();
    }
  }

  render() {
    let taskHeader;

    if (this.props.isLoading) {
      taskHeader = <h3>Loading...</h3>;
    } else if (this.props.goalError) {
      taskHeader = (
        <h3 style={{color: '#f00'}}>
          {this.props.goalError.message ? this.props.goalError.message : this.props.goalError}
        </h3>
      );
    } else {
      taskHeader = <h3>New Task</h3>
    }

    const goalTitles = _.map(this.props.goals, goal => {
      return (
        <option value={goal._id} key={goal._id}>{goal.title}</option>
      );
    });

    // display reminder message if there are no goals
    let makeGoalReminder = null;
    if(!goalTitles.length) {
      makeGoalReminder = (
        <p className="make-goal-reminder">To get started first create a new goal in the Goal Progress pane</p>
      );
    }

    return (
      <Modal
        className="new-task-modal"
        show={this.props.show}
        onHide={this.props.close}>
        <Modal.Header closeButton>
          {taskHeader}
        </Modal.Header>
        <form>
        <Modal.Body>
          <div className="form-group">
            <label>Task Name</label>
            <input
              className="form-control"
              placeholder="Task Name"
              value={this.state.name}
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
            {makeGoalReminder}
          </div>

        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            className="btn btn-primary save-btn"
            onClick={(e)=>this.handleSave(e)}>
            Save
          </button>
          <button
            type="button"
            className="btn btn-default cancel-btn"
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
