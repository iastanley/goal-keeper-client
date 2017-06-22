import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import './SignUpModal.css';

class SignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit(username, password, confirmPassword) {
    if (password !== confirmPassword) {
      console.log('passwords do not match');
      return;
    }
    this.props.makeSignUp(username, password);
  }

  handleInput(inputObj) {
    this.setState(inputObj);
  }

  handleCancel() {
    this.setState({
      username: '',
      password: '',
      confirmPassword: ''
    });
    this.props.close();
  }

  render() {
    return (
      <Modal
      className="signup-modal"
      show={this.props.show}
      onHide={this.props.close}>
        <Modal.Header>
          <h3>Sign Up</h3>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>User Name</label>
              <input
                required
                className="form-control"
                placeholder="Username"
                onChange={e => this.handleInput({username: e.target.value})}/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                required
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={e => this.handleInput({password: e.target.value})}/>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                required
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={e => this.handleInput({confirmPassword: e.target.value})}/>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Link onClick={this.props.close} className="btn btn-primary" to="/home">
            Sign Up
          </Link>
          <button
            className="btn btn-danger" onClick={() => this.handleCancel()}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    );
  }

}

export default SignUpModal;
