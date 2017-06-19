import { createStore, applyMiddleware } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { rootReducer } from './reducers';

export default createStore(rootReducer, applyMiddleware(reduxPackMiddleware));
