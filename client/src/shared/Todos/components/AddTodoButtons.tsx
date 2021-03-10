import React, { FC } from 'react';
import { AddTodoButtonsType } from './types';

import { Button } from '../../FormElements/components';

const AddTodoButtons: FC<AddTodoButtonsType> = ({
  onBtnSubmit,
  onBtnCancel,
  height,
}) => {
  return (
    <>
      <Button onClick={onBtnSubmit} hoverColor={'green'} height={height}>
        <i className='fas fa-check fa-2x'></i>
      </Button>
      <Button onClick={onBtnCancel} hoverColor={'red'} height={height}>
        <i className='fas fa-times fa-2x'></i>
      </Button>
    </>
  );
};

export default AddTodoButtons;
