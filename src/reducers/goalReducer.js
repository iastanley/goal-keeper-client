import _ from 'lodash';
import { handle } from 'redux-pack';
import {
  LOAD_GOAL,
  CREATE_GOAL,
  CREATE_TASK,
  EDIT_GOAL,
  EDIT_TASK,
  DELETE_GOAL,
  DELETE_TASK,
  SET_GOAL_ERROR} from '../actions';

export const initialState = {
  isLoading: false,
  goalError: null,
  goalList: {}
}

export default function goalReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_GOAL:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isLoading: true,
          goalError: null
        }),
        finish: prevState => ({...prevState, isLoading: false}),
        failure: prevState => ({...prevState, goalError: action.payload.data}),
        success: prevState => {
          return {
            ...prevState,
            goalList: _.mapKeys(action.payload.data, '_id')
          }
        }
      });
    case CREATE_GOAL:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isLoading: true,
          goalError: null
        }),
        finish: prevState => ({...prevState, isLoading: false}),
        failure: prevState => ({...prevState, goalError: action.payload.data}),
        success: prevState => {
          const newGoalList = {...prevState.goalList, [action.payload.data._id]: action.payload.data};
          return {
            ...prevState,
            goalList: newGoalList
          }
        }
      });
    case EDIT_GOAL:
    case CREATE_TASK:
    case EDIT_TASK:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isLoading: true,
          goalError: null
        }),
        finish: prevState => ({...prevState, isLoading: false}),
        failure: prevState => ({...prevState, goalError: action.payload.data}),
        success: prevState => {
          const updatedGoalList = {...prevState.goalList, [action.payload.data._id]: action.payload.data};
          return {
            ...prevState,
            goalList: updatedGoalList
          }
        }
      });
    case DELETE_GOAL:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isLoading: true,
          goalError: null
        }),
        finish: prevState => ({...prevState, isLoading: false}),
        failure: prevState => ({...prevState, goalError: action.payload.data}),
        success: prevState => {
          const updatedGoalList = {...prevState.goalList};
          delete updatedGoalList[action.meta.goalId];
          return {
            ...prevState,
            goalList: updatedGoalList
          }
        }
      });
    case DELETE_TASK:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isLoading: true,
          goalError: null
        }),
        finish: prevState => ({...prevState, isLoading: false}),
        failure: prevState => ({...prevState, goalError: action.payload.data}),
        success: prevState => {
          const updatedTasks = prevState.goalList[action.meta.goalId].tasks.filter(task => {
            return task._id !== action.meta.taskId;
          });
          const updatedGoal = {...prevState.goalList[action.meta.goalId], tasks: updatedTasks};
          return {
            ...prevState,
            goalList: {...prevState.goalList, [action.meta.goalId]: updatedGoal}
          }
        }
      });
    case SET_GOAL_ERROR:
      return {...state, goalError: action.goalError}
    default:
      return state;
  }
}
