import React, { useState } from 'react';
import { TodoContext } from '../data/context/TodoContext';
import { useTodosContext } from '../data/context/TodosContext';
import AddTodo from './AddTodo';

import { TodosWrapper } from './style';
import Todo from './Todo';

const Todos = () => {
  const [todo, setTodo] = useState<string>();
  const { todos, setTodos } = useTodosContext();
  // console.log(todos);
  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      <TodosWrapper>
        <AddTodo />
        {todos.length > 0 &&
          todos.map(todo => {
            return <Todo todo={todo} />;
          })}
      </TodosWrapper>
    </TodoContext.Provider>
  );
};

export default Todos;