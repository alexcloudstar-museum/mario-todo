import { createContext, useContext } from 'react';

export type TodoContextType = {
  todo: string;
  setTodo: (todo: string) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todo: '',
  setTodo: () => {},
});

export const useTodoContext = () => useContext(TodoContext);
