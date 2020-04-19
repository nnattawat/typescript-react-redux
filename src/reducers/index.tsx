import { combineReducers } from 'redux';
import { todosReducer, TodoState } from './todos';

export interface StoreState {
  todos: TodoState
};

export const reducers = combineReducers<StoreState>({
  todos: todosReducer  
});