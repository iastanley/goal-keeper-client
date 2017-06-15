import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import './SignUpModal.css';

const SignUpModal = (props) => {
  return (
    <Modal
    className="signup-modal"
    show={props.show}
    onHide={props.close}>
      <Modal.Header>
        <h3>Sign Up</h3>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label>User Name</label>
            <input className="form-control" placeholder="Username"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Link onClick={props.close} className="btn btn-primary" to="/home">
          Sign Up
        </Link>
        <button
          className="btn btn-danger" onClick={props.close}>
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignUpModal;
