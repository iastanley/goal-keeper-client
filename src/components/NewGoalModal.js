import React from 'react';
import { Modal } from 'react-bootstrap';
import './NewGoalModal.css';

const NewGoalModal = (props) => {
  return (
    <Modal
      className="new-goal-modal"
      show={props.show}
      onHide={props.close}>
      <Modal.Header closeButton>
        <h3>New Goal</h3>
      </Modal.Header>
      <Modal.Body>
      <form>
        <div className="form-group">
          <label>Goal Name</label>
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

export default NewGoalModal;
