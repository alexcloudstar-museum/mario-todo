import React, { useEffect, useState } from 'react';
import { HomepageWrapper } from './style';

import { Todos } from '../../shared';
import { TodosContext } from '../../shared/Todos/data/context/TodosContext';
import { getTodos } from '../../shared/Todos/data/service/todosService';

const Homepage = () => {
  const [todos, setTodos] = useState<[{ _id: string; todo: string }] | []>([]);

  useEffect(() => {
    getTodos
      .then(res => {
        setTodos(res.data.todos);
      })
      .catch(err => {
        console.log(err);
      });
  }, [getTodos]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <HomepageWrapper>
        <Todos />
      </HomepageWrapper>
    </TodosContext.Provider>
  );
};

export default Homepage;
