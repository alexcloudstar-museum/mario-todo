import { createContext, useContext } from 'react';

export type TodosContextType = {
  todos: string[];
  setTodos: (todos: string[]) => void;
};

export const TodosContext = createContext<TodosContextType>({
  todos: ['Placeholder', 'Placeholder 3'],
  setTodos: () => {},
});

export const useTodosContext = () => useContext(TodosContext);
