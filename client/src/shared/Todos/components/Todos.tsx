import { map, isEmpty } from 'lodash';
import React from 'react';
import { useTodosContext } from '../data/context/TodosContext';
import AddTodo from './AddTodo';

import { NoTodoLeft, TodosWrapper } from './style';
import Todo from './Todo';

const Todos = () => {
  const { todos } = useTodosContext();
  console.log(todos);
  return (
    <TodosWrapper>
      <AddTodo />
      {!isEmpty(todos) ? (
        map(todos, todo => <Todo key={todo.id} todo={todo} />)
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
