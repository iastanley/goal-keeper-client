import React from 'react';
import './NewGoalModal.css';

const NewGoalModal = (props) => {
  return (
    <div className="new-goal-modal">
      <form>
        <div className="form-group">
          <label>Goal Name</label>
          <input className="form-control" placeholder="Username"/>
        </div>
        <button type="submit" className="btn btn-default">Save</button>
      </form>
    </div>
  );
}

export default NewGoalModal;
