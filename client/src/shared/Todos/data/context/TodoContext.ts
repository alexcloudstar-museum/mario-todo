import { createContext, useContext } from 'react';

export type TodoContextType = {
  todo: { _id: string; todo: string; updatedAt?: string };
  tempTodo: { _id: string; todo: string };
  setTodo: ({ _id, todo }: { _id?: string; todo: string }) => void;
  setTempTodo: ({ _id, todo }: { _id?: string; todo: string }) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todo: { _id: null, todo: null },
  tempTodo: { _id: null, todo: null },
  setTodo: ({ _id, todo }: { _id?: string; todo: string }) => {},
  setTempTodo: ({ _id, todo }: { _id?: string; todo: string }) => {},
});

export const useTodoContext = () => useContext(TodoContext);
