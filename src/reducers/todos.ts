import { Todo, FetchTodosAction } from '../actions';
import { ActionTypes } from '../actions/actionTypes';

type todoActions = FetchTodosAction;// | LoadTodosAction;

export interface TodoState {
  todos: Todo[],
  apiStatus: string
}

export const todosReducer = (
  state: TodoState = { todos: [], apiStatus: 'pending' },
  action: todoActions 
) => {
  switch(action.type) {
    case ActionTypes.LOAD_TODOS:
      return {
        ...state,
        apiStatus: 'loading'
      }
    case ActionTypes.FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
        apiStatus: 'completed'
      };
    default:
      return state;
  }
};