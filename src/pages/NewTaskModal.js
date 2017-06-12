import React from 'react';
import './NewTaskModal.css';

const NewTaskModal = (props) => {
  return (
    <div className="new-task-modal">
      <form>
        <div className="form-group">
          <label>Task Name</label>
          <input className="form-control" placeholder="Username"/>
        </div>
        <button type="submit" className="btn btn-default">Save</button>
      </form>
    </div>
  );
}

export default NewTaskModal;
