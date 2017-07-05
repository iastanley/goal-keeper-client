import dayReducer from '../dayReducer';
import { setDay } from '../../actions';

const initialState = '2017-06-01';

describe('dayReducer', () => {
  const newDay = '2017-07-22';
  it('should set state with setDay', () => {
    const newState = dayReducer(initialState, setDay(newDay));
    expect(newState).toBe(newDay);
  });
});
