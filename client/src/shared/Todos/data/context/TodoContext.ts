import { createContext, useContext } from 'react';

// Transform todo into an object id, name

export type TodoContextType = {
  todo: { id: string; name: string };
  tempTodo: string;
  setTodo: ({ id, name }: { id: string; name: string }) => void;
  setTempTodo: (todo: string) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todo: { id: '', name: '' },
  tempTodo: '',
  setTodo: ({ id, name }: { id: string; name: string }) => {},
  setTempTodo: (todo: string) => {},
});

export const useTodoContext = () => useContext(TodoContext);
