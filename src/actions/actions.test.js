// import all actions and action types
import * as actions from './index.js';

import configureMockStore from 'redux-mock-store';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import nock from 'nock';

const mockStore = configureMockStore([reduxPackMiddleware]);

// STUB for LOAD_GOAL testing
describe('LOAD_GOAL async action', () => {
  afterEach(() => nock.cleanAll());
  it('should call async loadGoal action', () => {

  });
});
