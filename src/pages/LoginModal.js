import React from 'react';
import './LoginModal.css';

const LoginModal = (props) => {
  return (
    <div className="login">
      <form>
        <div className="form-group">
          <label>User Name</label>
          <input className="form-control" placeholder="Username"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-default">Log In</button>
      </form>
    </div>
  );
}

export default LoginModal;
