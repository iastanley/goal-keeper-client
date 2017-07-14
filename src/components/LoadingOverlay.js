import React from 'react';
import './LoadingOverlay.css';

const LoadingOverlay = (props) => {
  return(
    <div className={props.isLoading ? "overlay loading-show" : "overlay"}>
      <div className="loading-content">
        <div className="loader"></div>
        <div className="loading-msg">Loading...Please Wait</div>
      </div>
    </div>
  );
}

export default LoadingOverlay;
