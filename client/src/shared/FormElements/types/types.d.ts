export interface InputProps {
  value?: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  height?: string;
  onBlur?: any;
  onChange: (e: React.FormEvent<HTMLInputElement>) => any;
}

export interface ButtonProps {
  height?: string;
  hoverColor?: string;
  children: React.ReactNode;
  props?: any;
  className?: string;
  onClick: (param?: any) => void;
}
