import { createContext, useContext } from 'react';

export type TodosContextType = {
  todos: { id: string; name: string }[];
  setTodos: (param: any) => void;
};

export const TodosContext = createContext<TodosContextType>({
  todos: [{ id: '', name: '' }],
  setTodos: (param: any) => {},
});

export const useTodosContext = () => useContext(TodosContext);
