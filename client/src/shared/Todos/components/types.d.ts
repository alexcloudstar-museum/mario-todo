import { ButtonProps } from '../../FormElements/types/types';

export interface AddTodoProps {}

export type AddTodoButtonsProps = Pick<ButtonProps, 'height'> & {
  onBtnSubmit: () => void;
  onBtnCancel: () => void;
};
