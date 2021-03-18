import React from 'react';
import { NoTodoLeft, TodosWrapper } from './style';
import { useTodosContext } from '../data/context/TodosContext';
import AddTodo from './AddTodo';
import Todo from './Todo';

import { map, isEmpty } from 'lodash';

const Todos = () => {
  const { todos } = useTodosContext();

  return (
    <TodosWrapper>
      <AddTodo />
      {!isEmpty(todos) ? (
        map(todos, todo => <Todo key={todo._id} todo={todo} />)
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
