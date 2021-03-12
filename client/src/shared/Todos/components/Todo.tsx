import React, { FC, useState } from 'react';
import { Button, Input } from '../../FormElements/components';
import { StyledTodo } from './style';

import { useButtonContext } from '../../FormElements/data/context/ButtonContext';
import AddTodoButtons from './AddTodoButtons';

import { useEditTodoHook } from '../data/hooks/useEditTodoHook';

type TodoProp = { todo: { id: string; name: string } };

const Todo: FC<TodoProp> = ({ todo }) => {
  const defaultHEIGHT = '100%';

  console.log(todo);

  const { disabled, setDisabled } = useButtonContext();
  const editTodoHook = useEditTodoHook(todo);

  return (
    <StyledTodo>
      <Input
        value={todo.name}
        placeholder={todo.name}
        disabled={disabled}
        type='text'
        onChange={e => editTodoHook.onChange(e)}
        height={defaultHEIGHT}
      />
      {disabled ? (
        <>
          <Button
            onClick={() => setDisabled(false)}
            hoverColor={'green'}
            height={defaultHEIGHT}
          >
            <i className='fas fa-pen fa-2x'></i>
          </Button>
          <Button
            onClick={editTodoHook.onDeleteTodo}
            hoverColor={'red'}
            height={defaultHEIGHT}
          >
            <i className='fas fa-trash fa-2x'></i>
          </Button>
        </>
      ) : (
        <AddTodoButtons
          onBtnSubmit={editTodoHook.onBtnSubmit}
          onBtnCancel={() => setDisabled(true)}
          height={defaultHEIGHT}
        />
      )}
    </StyledTodo>
  );
};

export default Todo;
