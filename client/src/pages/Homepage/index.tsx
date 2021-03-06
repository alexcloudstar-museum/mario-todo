import React, { useState } from 'react';
import { HomepageWrapper } from './style';

import { Container, Todos } from '../../components';
import { TodosContext } from '../../data/todos/context/TodosContext';

const Homepage = () => {
  const [todos, setTodos] = useState<string[]>([]);
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <HomepageWrapper>
        <Todos />
      </HomepageWrapper>
    </TodosContext.Provider>
  );
};

export default Homepage;
