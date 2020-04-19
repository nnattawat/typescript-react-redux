import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo } from '../actions/todoActions';
import { StoreState,  } from '../reducers';
import { TodoState } from '../reducers/todosReducer';

interface AppProps {
  todos: TodoState,
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
};

function _App({ todos, fetchTodos, deleteTodo }: AppProps): JSX.Element {
  useEffect(() => {
    if (todos.apiStatus === 'pending') {
      fetchTodos();
    }
  });

  return (
    <div>
      {todos.apiStatus === 'loading' && <p>Loading....</p>}
      {todos.todos.map(todo => (
        <p key={todo.id}>
          {todo.title} | <b>{todo.completed ? 'completed' : 'pending'}</b> | <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}

const mapStateToProps = (state: StoreState) => ({
  todos: state.todos
});

const mapActionToProps = { fetchTodos, deleteTodo };

export const App = connect(
  mapStateToProps,
  mapActionToProps
)(_App);