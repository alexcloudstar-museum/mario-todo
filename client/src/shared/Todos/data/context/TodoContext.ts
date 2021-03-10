import { createContext, useContext } from 'react';

export type TodoContextType = {
  todo: string;
  tempTodo: string;
  setTodo: (todo: string) => void;
  setTempTodo: (todo: string) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todo: '',
  tempTodo: '',
  setTodo: (todo: string) => {},
  setTempTodo: (todo: string) => {},
});

export const useTodoContext = () => useContext(TodoContext);
