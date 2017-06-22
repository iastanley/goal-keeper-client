import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import './LoginModal.css';

// We'll need to connect the login button with a ajax POST request async action to the server and handle the response before
// but for testing we'll use a Link to get to home page

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput(inputObj) {
    this.setState(inputObj);
  }

  handleLogin() {
    if (this.state.username.length && this.state.password.length) {
      this.props.makeLogin(this.state.username, this.state.password);
    }
    console.log('login failed');
    this.handleCancel();
  }

  handleCancel() {
    this.setState({
      username: '',
      password: ''
    });
    this.props.close();
  }

  render() {
    return (
      <Modal className="login-modal" show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
          <h3>Login</h3>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Username:</label>
              <input
                required
                className="form-control"
                placeholder="Username"
                onChange={e => this.handleInput({username: e.target.value})}/>
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                required
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={e => this.handleInput({password: e.target.value})}/>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => this.handleLogin()}
            className="btn btn-primary">
            Log In
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleCancel()}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default LoginModal;
