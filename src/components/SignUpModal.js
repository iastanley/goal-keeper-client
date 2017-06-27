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
    if (this.props.userError) {
      signUpHeader = <h3 style={{color: '#f00'}}>{this.props.userError.message}</h3>
    } else if (this.props.isLoading) {
      signUpHeader = <h3>Loading...</h3>;
    } else {
      signUpHeader = <h3>Sign Up</h3>;
    }
    return (
      <Modal
      className="signup-modal"
      show={this.props.show}
      onHide={this.props.close}>
        <Modal.Header>
          {signUpHeader}
        </Modal.Header>
        <form>
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
            type="button"
            className="btn btn-default"
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
