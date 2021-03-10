import { ButtonProps } from '../../FormElements/types/types';

export interface AddTodo {}

export type AddTodoButtonsType = Pick<ButtonProps, 'height'> & {
  onBtnSubmit: () => void;
  onBtnCancel: () => void;
};
