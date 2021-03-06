import { map, isEmpty, divide } from 'lodash';
import React, { useState } from 'react';
import { TodoContext } from '../data/context/TodoContext';
import { useTodosContext } from '../data/context/TodosContext';
import AddTodo from './AddTodo';

import { TodosWrapper } from './style';
import Todo from './Todo';

const Todos = () => {
  const [todo, setTodo] = useState<string>();
  const { todos, setTodos } = useTodosContext();

  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      <TodosWrapper>
        <AddTodo />
        {!isEmpty(todos) ? (
          map(todos, todo => <Todo key={Math.random()} todo={todo} />)
        ) : (
          <div>No todos left 🥳</div>
        )}
      </TodosWrapper>
    </TodoContext.Provider>
  );
};

export default Todos;
