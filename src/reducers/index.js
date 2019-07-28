import { combineReducers } from 'redux';
import { createReducer } from 'deox';

const main = createReducer({}, handle => []);

export const reducer = combineReducers({
  main
});
