import React from 'react';
import AddTodo from './AddTodo';

import { TodosWrapper } from './style';
import Todo from './Todo';

const Todos = () => {
  return (
    <TodosWrapper>
      <AddTodo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </TodosWrapper>
  );
};

export default Todos;
