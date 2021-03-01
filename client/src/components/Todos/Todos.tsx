import React from 'react';
import AddTodo from './AddTodo';

import { TodosWrapper } from './style';

const Todos = () => {
  return (
    <TodosWrapper>
      <AddTodo />
    </TodosWrapper>
  );
};

export default Todos;
