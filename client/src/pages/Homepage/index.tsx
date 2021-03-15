import React, { useState } from 'react';
import { HomepageWrapper } from './style';

import { Todos } from '../../shared';
import { TodosContext } from '../../shared/Todos/data/context/TodosContext';

const Homepage = () => {
  const [todos, setTodos] = useState<[{ id: string; name: string }]>([
    { id: null, name: null },
  ]);
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <HomepageWrapper>
        <Todos />
      </HomepageWrapper>
    </TodosContext.Provider>
  );
};

export default Homepage;
