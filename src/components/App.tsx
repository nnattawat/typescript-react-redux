import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';
import { StoreState,  } from '../reducers';
import { TodoState } from '../reducers/todos';

interface AppProps {
  todos: TodoState,
  fetchTodos(): any;
};

function _App({ todos, fetchTodos }: AppProps): JSX.Element {
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
          {todo.title}
        </p>
      ))}
    </div>
  );
}

const mapStateToProps = (state: StoreState) => ({
  todos: state.todos
});

export const App = connect(
  mapStateToProps,
  { fetchTodos}
)(_App);