import navReducer, { initialState } from '../navReducer';
import * as actions from '../../actions';

describe('navReducer', () => {
  const goalId = '123456';

  it('should set showLogin on toggleLogin', () => {
    const newState = navReducer(initialState, actions.toggleLogin(true));
    expect(newState.showLogin).toBe(true);
  });

  it('should set showSignUp on toggleSignUp', () => {
    const newState = navReducer(initialState, actions.toggleSignUp(true));
    expect(newState.showSignUp).toBe(true);
  });

  it('should set showNewTask on toggleNewTask', () => {
    const newState = navReducer(initialState, actions.toggleNewTask(true));
    expect(newState.showNewTask).toBe(true);
  });

  it('should set showNewGoal on toggleNewGoal', () => {
    const newState = navReducer(initialState, actions.toggleNewGoal(true));
    expect(newState.showNewGoal).toBe(true);
  });

  it('should set showGoalPane on toggleGoalPane', () => {
    const newState = navReducer(initialState, actions.toggleGoalPane(true));
    expect(newState.showGoalPane).toBe(true);
  });

  it('should set showEditGoal on toggleEditGoal', () => {
    const newState =
      navReducer(initialState, actions.toggleEditGoal(true, goalId));
    const expectedState = {
      show: true,
      goalId
    }
    expect(newState.showEditGoal).toEqual(expectedState);
  });
});
