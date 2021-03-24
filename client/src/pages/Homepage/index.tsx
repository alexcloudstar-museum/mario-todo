import React, { useEffect, useState } from 'react';
import { HomepageWrapper } from './style';

import { Todos } from '../../shared';
import { TodosContext } from '../../shared/Todos/data/context/TodosContext';
import { getTodos } from '../../shared/Todos/data/service/todosService';
import { CenterContent } from '../../utils';

const Homepage = () => {
  const [todos, setTodos] = useState<[]>([]);

  useEffect(() => {
    (async () => {
      const todos = await getTodos();
      setTodos(todos.data.todos);
    })();
  }, []);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <Todos />
    </TodosContext.Provider>
  );
};

export default Homepage;
