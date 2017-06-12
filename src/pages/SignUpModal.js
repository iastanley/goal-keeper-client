import React from 'react';
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
        <button type="submit" className="btn btn-default">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpModal;
