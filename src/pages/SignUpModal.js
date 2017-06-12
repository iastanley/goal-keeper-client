import React from 'react';
import { Link } from 'react-router-dom';
import './SignUpModal.css';

const SignUpModal = (props) => {
  return (
    <div className="signup">
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
        <Link className="btn btn-primary" to="/home">Sign Up</Link>
        <Link className="btn btn-danger" to="/">Cancel</Link>
      </form>
    </div>
  );
}

export default SignUpModal;
