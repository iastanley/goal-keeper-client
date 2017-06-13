import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import './LoginModal.css';

// We'll need to connect the login button with a ajax POST request async action to the server and handle the response before
// but for testing we'll use a Link to get to home page

const LoginModal = (props) => {
  return (
    <Modal className="login-modal" show={props.show} onHide={props.close}>
      <Modal.Header closeButton>
        <h3>Login</h3>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label>User Name:</label>
            <input className="form-control" placeholder="Username"/>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Link className="btn btn-primary" to="/home">Log In</Link>
        <button
          className="btn btn-danger" onClick={props.close}>
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
