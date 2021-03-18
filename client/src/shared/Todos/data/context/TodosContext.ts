import { createContext, useContext } from 'react';

export type TodosContextType = {
  todos: { _id: string; todo: string }[] | null;
  setTodos: (param: any) => void;
};

export const TodosContext = createContext<TodosContextType>({
  todos: null,
  setTodos: (param: any) => {},
});

export const useTodosContext = () => useContext(TodosContext);
