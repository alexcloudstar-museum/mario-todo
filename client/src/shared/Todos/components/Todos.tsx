import React from 'react';
import { NoTodoLeft, TodosWrapper } from './style';
import { useTodosContext } from '../data/context/TodosContext';
import AddTodo from './AddTodo';
import Todo from './Todo';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { map, isEmpty, sortBy } from 'lodash';

const Todos = () => {
  const { todos } = useTodosContext();

  const sortedTodos = sortBy(todos, todo => new Date(todo.updatedAt));

  return (
    <TodosWrapper>
      <AddTodo />
      {!isEmpty(todos) ? (
        map(sortedTodos, todo => (
          <TransitionGroup transitionName='todos'>
            <Todo key={todo._id} todo={todo} />
          </TransitionGroup>
        ))
      ) : (
        <NoTodoLeft>
          <h3>Congrats!</h3>
          <h2>No todos left 🥳</h2>
        </NoTodoLeft>
      )}
    </TodosWrapper>
  );
};

export default Todos;
