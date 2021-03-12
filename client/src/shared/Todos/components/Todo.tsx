import React, { FC, useState } from 'react';
import { Button, Input } from '../../FormElements/components';
import { StyledTodo } from './style';

import { useButtonContext } from '../../FormElements/data/context/ButtonContext';
import AddTodoButtons from './AddTodoButtons';

import { useEditTodoHook } from '../data/hooks/useEditTodoHook';
import { useTodoContext } from '../data/context/TodoContext';

type TodoProp = {};

const Todo: FC<TodoProp> = () => {
  const defaultHEIGHT = '100%';

  const { tempTodo, setTempTodo } = useTodoContext();
  const { disabled, setDisabled } = useButtonContext();
  const editTodoHook = useEditTodoHook();

  return (
    <StyledTodo>
      <Input
        value={tempTodo.name}
        placeholder={tempTodo.name}
        disabled={disabled}
        type='text'
        onBlur={editTodoHook.blurEvent}
        onChange={editTodoHook.onChange}
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
