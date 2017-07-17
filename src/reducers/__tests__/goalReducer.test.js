import { LIFECYCLE, KEY } from 'redux-pack';

// import reducer
import goalReducer, { initialState } from '../goalReducer';

// import actions
import * as actions from '../../actions';

// required for testing redux-pack async actions
function makePackAction(lifecycle, { type, payload, meta={} }) {
  return {
    type,
    payload,
    meta: { ...meta, [KEY.LIFECYCLE]: lifecycle }
  }
}

describe('goalReducer', () => {
  const testGoals = [
    {
      _id: 1,
      title: 'Goal 1',
      color: '#e91e63',
      tasks: [
        {
          _id: 10,
          name: 'Do this first',
          completed: true,
          date: '2017-07-02'
        },
        {
          _id: 11,
          name: 'Do this second',
          completed: false,
          date: '2017-06-01'
        }
      ]
    },
    {
      _id: 2,
      title: 'Goal 2',
      color: '#00bcd4',
      tasks: [
        {
          _id: 12,
          name: 'Do this first',
          completed: true,
          date: '2017-06-01'
        },
        {
          _id: 13,
          name: 'Do this second',
          completed: false,
          date: '2017-06-12'
        },
        {
          _id: 14,
          name: 'Do this second',
          completed: false,
          date: '2017-06-23'
        },
        {
          _id: 15,
          name: 'Do this second',
          completed: false,
          date: '2017-06-24'
        }

      ]
    }
  ];
  const initialStateWithGoals = {
    isLoading: false,
    loadGoalIsLoading: false,
    goalError: null,
    goalList: {
      1: {
        _id: 1,
        title: 'Goal 1',
        color: '#e91e63',
        tasks: [
          {
            _id: 10,
            name: 'Do this first',
            completed: true,
            date: '2017-07-02'
          },
          {
            _id: 11,
            name: 'Do this second',
            completed: false,
            date: '2017-06-01'
          }
        ]
      }, // end of goal _id: 1
      2: {
        _id: 2,
        title: 'Goal 2',
        color: '#00bcd4',
        tasks: [
          {
            _id: 12,
            name: 'Do this first',
            completed: true,
            date: '2017-06-01'
          },
          {
            _id: 13,
            name: 'Do this second',
            completed: false,
            date: '2017-06-12'
          },
          {
            _id: 14,
            name: 'Do this second',
            completed: false,
            date: '2017-06-23'
          },
          {
            _id: 15,
            name: 'Do this second',
            completed: false,
            date: '2017-06-24'
          }

        ]
      }, // end of goal _id: 2
      3: {
        _id: 3,
        title: 'Goal 3',
        color: '#ffc107',
        tasks: [
          {
            _id: 16,
            name: 'Do this first',
            completed: true,
            date: '2017-06-01'
          },
          {
            _id: 17,
            name: 'Do this second',
            completed: false,
            date: '2017-06-12'
          }
        ]
      } // end of goal _id: 2
    }
  };

  const newGoal = {
    _id: 1000,
    title: 'New Test Goal',
    color: '#fff',
    tasks: []
  }

  const updatedGoal = {
    _id: 1,
    title: 'Update To Goal1',
    color: '#000',
    tasks: [
      {
        _id: 10,
        name: 'Do this first',
        completed: true,
        date: '2017-07-02'
      },
      {
        _id: 11,
        name: 'Do this second',
        completed: false,
        date: '2017-06-01'
      }
    ]
  }

  const newTask = {
    _id: 2000,
    name: 'New Test Task',
    completed: false,
    date: '2017-01-01'
  }

  it('should set goalList on loadGoal action', () => {
    const payload = {
      data: testGoals,
      status: 200,
      statusText: 'OK'
    }
    const expectedState = {
      isLoading: false,
      loadGoalIsLoading: false,
      goalError: null,
      goalList: {
        1: {
          _id: 1,
          title: 'Goal 1',
          color: '#e91e63',
          tasks: [
            {
              _id: 10,
              name: 'Do this first',
              completed: true,
              date: '2017-07-02'
            },
            {
              _id: 11,
              name: 'Do this second',
              completed: false,
              date: '2017-06-01'
            }
          ]
        }, // end of goal _id: 1
        2: {
          _id: 2,
          title: 'Goal 2',
          color: '#00bcd4',
          tasks: [
            {
              _id: 12,
              name: 'Do this first',
              completed: true,
              date: '2017-06-01'
            },
            {
              _id: 13,
              name: 'Do this second',
              completed: false,
              date: '2017-06-12'
            },
            {
              _id: 14,
              name: 'Do this second',
              completed: false,
              date: '2017-06-23'
            },
            {
              _id: 15,
              name: 'Do this second',
              completed: false,
              date: '2017-06-24'
            }

          ]
        } // end of goal _id: 2
      }
    }
    // LIFECYCLE.SUCCESS indicates that the handle function runs the success property in the reducer
    const action = makePackAction(LIFECYCLE.SUCCESS, {
      type: actions.LOAD_GOAL,
      payload
    });
    const newState = goalReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  it('should create a new goal on createGoal action', () => {
    //api returns a single goal
    const payload = {
      data: newGoal,
      status: 201,
      statusText: 'OK'
    }
    const expectedState = {
      isLoading: false,
      loadGoalIsLoading: false,
      goalError: null,
      goalList: {
        [newGoal._id]: newGoal
      }
    }
    const action = makePackAction(LIFECYCLE.SUCCESS, {
      type: actions.CREATE_GOAL,
      payload
    });
    const newState = goalReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  it('should update a goal on editGoal action', () => {
    //api returns the updated single goal
    const payload = {
      data: updatedGoal,
      status: 201,
      statusText: 'OK'
    }
    const expectedGoalList = {
      ...initialStateWithGoals.goalList, [updatedGoal._id]: updatedGoal
    }
    const expectedState = {
      ...initialStateWithGoals,
      goalList: expectedGoalList
    }
    const action = makePackAction(LIFECYCLE.SUCCESS, {
      type: actions.EDIT_GOAL,
      payload
    });
    const newState = goalReducer(initialStateWithGoals, action);
    expect(newState).toEqual(expectedState);
  });

  it('should create a task on createTask action', () => {
    // api returns the goal containing the new task
    const goalWithNewTask = {...initialStateWithGoals.goalList[3]}
    goalWithNewTask.tasks.push(newTask);
    const payload = {
      data: goalWithNewTask,
      status: 201,
      statusText: 'OK'
    }
    const expectedGoalList = {
      ...initialStateWithGoals.goalList, [goalWithNewTask._id]: goalWithNewTask
    }
    const expectedState = {
      ...initialStateWithGoals,
      goalList: expectedGoalList
    }
    const action = makePackAction(LIFECYCLE.SUCCESS, {
      type: actions.CREATE_TASK,
      payload
    });
    const newState = goalReducer(initialStateWithGoals, action);
    expect(newState).toEqual(expectedState);
  });

  it('should delete a goal on deleteGoal action', () => {
    //api does not return anything in res.body
    const payload = {
      status: 204,
      statusText: 'OK'
    }

    const deletedGoalId = 2;

    const expectedGoalList = {...initialStateWithGoals.goalList}
    delete expectedGoalList[deletedGoalId];
    const expectedState = {
      ...initialStateWithGoals,
      goalList: expectedGoalList
    }
    const action = makePackAction(LIFECYCLE.SUCCESS, {
      type: actions.DELETE_GOAL,
      payload,
      meta: {
        goalId: deletedGoalId
      }
    });
    const newState = goalReducer(initialStateWithGoals, action);
    expect(newState).toEqual(expectedState);
  });

  it('should delete task on deleteTask action', () => {
    // api returns the goal with status 201
    const payload = {
      data: '', // data is returned but is not necessary for this action
      status: 201,
      statusText: 'OK'
    }
    const goalId = 2;
    const deletedTaskId = 15;
    const expectedTasks =
      initialStateWithGoals.goalList[goalId].tasks.filter(task => {
        return task._id !== deletedTaskId;
      });
    const expectedGoal = {
      ...initialStateWithGoals.goalList[goalId],
      tasks: expectedTasks
     }
    const expectedGoalList = {
      ...initialStateWithGoals.goalList,
      [goalId]: expectedGoal
    }
    const expectedState = {
      ...initialStateWithGoals,
      goalList: expectedGoalList
    }
    const action = makePackAction(LIFECYCLE.SUCCESS, {
      type: actions.DELETE_TASK,
      payload,
      meta: {
        goalId,
        taskId: deletedTaskId
      }
    });
    const newState = goalReducer(initialStateWithGoals, action);
    expect(newState).toEqual(expectedState);
  });

  it('should set goal error on setGoalError action', () => {
    const testGoalError = 'Test User Error';
    const expectedState = {
      isLoading: false,
      loadGoalIsLoading: false,
      goalError: testGoalError,
      goalList: {}
    }
    const newState = goalReducer(initialState,
      actions.setGoalError(testGoalError));
    expect(newState).toEqual(expectedState);
  });
});
