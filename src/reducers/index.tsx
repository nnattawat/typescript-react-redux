import { combineReducers } from 'redux';
import { TodoState, todosReducer } from './todosReducer';

export interface StoreState {
  todos: TodoState
};

export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});
