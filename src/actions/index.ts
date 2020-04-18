import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './actionTypes';

const TODO_URL = 'https://jsonplaceholder.typicode.com/todos';
interface Todo {
  id: number;
  title: string;
  completed: boolean;
};

interface FetchTodosAction {
  type: number;
  payload: Todo[]
};

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get<Todo[]>(TODO_URL);

    dispatch<FetchTodosAction>({
      type: ActionTypes.FETCH_TODOS,
      payload: res.data
    });
  };
};