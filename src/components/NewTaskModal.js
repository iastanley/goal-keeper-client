import React from 'react';
import _ from 'lodash';
import { Modal } from 'react-bootstrap';
import './NewTaskModal.css';

const NewTaskModal = (props) => {

  const goalTitles = _.map(props.goals, goal => {
    return (
      <option value={goal._id} key={goal._id}>{goal.title}</option>
    );
  });

  return (
    <Modal
      className="new-task-modal"
      show={props.show}
      onHide={props.close}>
      <Modal.Header closeButton>
        <h3>New Task</h3>
      </Modal.Header>
      <Modal.Body>
      <form>
        <div className="form-group">
          <label>Task Name</label>
          <input className="form-control" placeholder="Task Name"/>
        </div>
        <div className="form-group">
          <label>Group</label>
          <select className="form-control" defaultValue="default">
            <option disabled value="default">Choose a Group</option>
            {goalTitles}
          </select>
        </div>
      </form>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-primary"
          onClick={props.close}>
          Save
        </button>
        <button
          className="btn btn-danger" onClick={props.close}>
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewTaskModal;
