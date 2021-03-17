import React, { FC } from 'react';
import { AddTodoProps } from './types';
import { AddTodoWrapper } from './style';

import { Input } from '../../FormElements/components';
import { useTodoContext } from '../data/context/TodoContext';

import AddTodoButtons from './AddTodoButtons';
import { useAddTodoHook } from '../data/hooks/useAddTodoHook';

const AddTodo: FC<AddTodoProps> = () => {
  const { todo } = useTodoContext();
  const addTodoHook = useAddTodoHook();

  return (
    <AddTodoWrapper>
      <Input
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          addTodoHook.onChange(e)
        }
        type='text'
        placeholder='New Todo'
        value={todo.todo}
      />
      <AddTodoButtons
        onBtnSubmit={addTodoHook.onBtnSubmit}
        onBtnCancel={addTodoHook.onBtnCancel}
      />
    </AddTodoWrapper>
  );
};

export default AddTodo;
