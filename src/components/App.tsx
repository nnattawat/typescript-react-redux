import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, deleteTodo } from '../actions/todoActions';
import { StoreState,  } from '../reducers';

export function App(): JSX.Element {
  const todos = useSelector((state: StoreState) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todos.apiStatus === 'pending') {
      dispatch(fetchTodos());
    }
  });

  return (
    <div>
      {todos.apiStatus === 'loading' && <p>Loading....</p>}
      {todos.todos.map(todo => (
        <p key={todo.id}>
          {todo.title} | <b>{todo.completed ? 'completed' : 'pending'}</b> | <button onClick={() => dispatch(deleteTodo(todo.id))}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}