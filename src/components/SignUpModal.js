import React, { Component } from 'react';
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      console.log('passwords do not match');
      return;
    }
    this.props.makeSignUp(this.state.username, this.state.password);
    this.props.close();

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
      <form onSubmit={this.handleSubmit}>

      <Modal
      className="signup-modal"
      show={this.props.show}
      onHide={this.props.close}>
        <Modal.Header>
          <h3>Sign Up</h3>
        </Modal.Header>
        <Modal.Body>
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

        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}>
            Sign Up
          </button>
          <button
            className="btn btn-danger" onClick={() => this.handleCancel()}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
      </form>
    );
  }

}

export default SignUpModal;
