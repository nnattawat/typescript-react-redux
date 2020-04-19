import { ActionTypes } from '../actions/actionTypes';
import { Todo, DeleteTodoAction, LoadTodosAction, FetchTodosAction } from '../actions/todoActions';

type todoActions = FetchTodosAction | LoadTodosAction | DeleteTodoAction;

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
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    default:
      return state;
  }
};