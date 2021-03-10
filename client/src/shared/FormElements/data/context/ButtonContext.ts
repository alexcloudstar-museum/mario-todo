import { createContext, useContext } from 'react';

export type ButtonContextType = {
  disabled: boolean;
  setDisabled: (disabled?: boolean) => void;
};

export const ButtonContext = createContext<ButtonContextType>({
  disabled: true,
  setDisabled: () => {},
});

export const useButtonContext = () => useContext(ButtonContext);
