import { createContext, useContext } from 'react';

export type TodosContextType = {
  todos: { id: string; name: string }[] | null;
  setTodos: (param: any) => void;
};

export const TodosContext = createContext<TodosContextType>({
  todos: null,
  setTodos: (param: any) => {},
});

export const useTodosContext = () => useContext(TodosContext);
