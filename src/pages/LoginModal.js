import React from 'react';
import { Link } from 'react-router-dom';
import './LoginModal.css';

// We want to have this form actually submit to server and get response
// but for testing we'll use a Link to get to home page

const LoginModal = (props) => {
  return (
    <div className="login">
      <form>
        <h2>Login</h2>
        <div className="form-group">
          <label>User Name:</label>
          <input className="form-control" placeholder="Username"/>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" placeholder="Password"/>
        </div>
        <Link className="btn btn-primary" to="/home">Log In</Link>
        <Link className="btn btn-danger" to="/">Cancel</Link>
      </form>
    </div>
  );
}

export default LoginModal;
