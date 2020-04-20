import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './actionTypes';

const TODO_URL = 'https://jsonplaceholder.typicode.com/todos';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
};

export interface FetchTodosAction {
  type: ActionTypes.FETCH_TODOS;
  payload: Todo[]
};

export interface LoadTodosAction {
  type: ActionTypes.LOAD_TODOS;
};

export interface DeleteTodoAction {
  type: ActionTypes.DELETE_TODO;
  id: number;
};

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    dispatch<LoadTodosAction>({ type: ActionTypes.LOAD_TODOS});

    const res = await axios.get<Todo[]>(TODO_URL);

    dispatch<FetchTodosAction>({
      type: ActionTypes.FETCH_TODOS,
      payload: res.data
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: ActionTypes.DELETE_TODO,
  id
});
