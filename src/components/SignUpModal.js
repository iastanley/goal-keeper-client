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
    if (!this.state.username || !this.state.password || !this.state.confirmPassword) {
      this.props.setUserError('Missing Required Field.');
    } else if (this.state.password !== this.state.confirmPassword) {
      this.props.setUserError('Confirmation Password Does Not Match.');
    } else {
      this.props.makeSignUp(this.state.username, this.state.password);
    }
    this.setState({
      username: '',
      password: '',
      confirmPassword: ''
    });
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
    let signUpHeader;

    if (this.props.isLoading) {
      signUpHeader = <h3>Loading...</h3>;
    } else if (this.props.userError) {
      signUpHeader = (
        <h3 style={{color: '#f00'}}>
          {this.props.userError.message ? this.props.userError.message : this.props.userError}
        </h3>);
    } else {
      signUpHeader = <h3>Sign Up</h3>;
    }

    return (
      <Modal
        className="signup-modal"
        show={this.props.show}
        onHide={() => this.handleCancel()}>
        <Modal.Header closeButton>
          {signUpHeader}
        </Modal.Header>
        <form>
        <Modal.Body>
            <div className="form-group">
              <label>User Name</label>
              <input
                required
                className="form-control user-input"
                placeholder="Username"
                value={this.state.username}
                onChange={e => this.handleInput({username: e.target.value})}/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                required
                type="password"
                className="form-control password-input"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.handleInput({password: e.target.value})}/>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                required
                type="password"
                className="form-control confirm-input"
                placeholder="Password"
                value={this.state.confirmPassword}
                onChange={e => this.handleInput({confirmPassword: e.target.value})}/>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            className="btn btn-primary signup-btn"
            onClick={this.handleSubmit}>
            Sign Up
          </button>
          <button
            type="button"
            className="btn btn-default cancel-btn"
            onClick={() => this.handleCancel()}>
            Cancel
          </button>
        </Modal.Footer>
        </form>
      </Modal>

    );
  }

}

export default SignUpModal;
