import { createContext, useContext } from 'react';

// Transform todo into an object id, name

export type TodoContextType = {
  todo: { id: string; name: string };
  tempTodo: { id: string; name: string };
  setTodo: ({ id, name }: { id?: string; name: string }) => void;
  setTempTodo: ({ id, name }: { id?: string; name: string }) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todo: { id: null, name: null },
  tempTodo: { id: null, name: null },
  setTodo: ({ id, name }: { id?: string; name: string }) => {},
  setTempTodo: ({ id, name }: { id?: string; name: string }) => {},
});

export const useTodoContext = () => useContext(TodoContext);
