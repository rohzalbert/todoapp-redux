import { createStore, combineReducers } from 'redux';
import { taskReducer } from './taskReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export const store = createStore(rootReducer);
