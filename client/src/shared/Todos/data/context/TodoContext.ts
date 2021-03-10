import { createContext, useContext } from 'react';

export type TodoContextType = {
  todo: string;
  isEditTodo?: boolean;
  setTodo: (todo: string) => void;
  setIsEditTodo: (isEdit: boolean) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todo: '',
  isEditTodo: false,
  setTodo: (todo: string) => {},
  setIsEditTodo: (isEdit: boolean) => {},
});

export const useTodoContext = () => useContext(TodoContext);
