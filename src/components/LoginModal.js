import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import './LoginModal.css';

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

  // It would be better if handleLogin was assigned to a onSubmit event
  handleLogin(event) {
    event.preventDefault();
    if (this.state.username.length && this.state.password.length) {
      this.props.makeLogin(this.state.username, this.state.password);
    } else {
      this.props.setUserError('Username or Password Missing');
    }
    this.setState({
      username: '',
      password: ''
    });
  }

  handleCancel() {
    this.setState({
      username: '',
      password: ''
    });
    this.props.close();
  }



  render() {
    let loginHeader;

    if (this.props.isLoading) {
      loginHeader = <h3>Loading</h3>;
    } else if (this.props.userError) {
      loginHeader = <h3 style={{color: '#f00'}}>{this.props.userError}</h3>;
    } else {
      loginHeader = <h3>Login</h3>
    }

    return (
      <Modal
        className="login-modal"
        show={this.props.show}
        onHide={() => this.handleCancel()}>
        <Modal.Header closeButton>
          {loginHeader}
        </Modal.Header>
        <form>
        <Modal.Body>
            <div className="form-group">
              <label>Username:</label>
              <input
                className="form-control"
                placeholder="Username"
                value={this.state.username}
                onChange={e => this.handleInput({username: e.target.value})}/>
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.handleInput({password: e.target.value})}/>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            onClick={(e) => this.handleLogin(e)}
            className="btn btn-primary login-btn">
            Log In
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

export default LoginModal;
