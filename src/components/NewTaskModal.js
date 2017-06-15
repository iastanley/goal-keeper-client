import React from 'react';
import { Modal } from 'react-bootstrap';
import './NewTaskModal.css';

const NewTaskModal = (props) => {
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
          <input className="form-control" placeholder="Username"/>
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
