export interface InputProps {
  value: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  height?: string;
  onChange: (e: React.FormEvent) => void;
}

export interface ButtonProps {
  height?: string;
  hoverColor?: string;
  children: React.ReactNode;
  props?: any;
  className?: string;
  onClick: (param?: any) => void;
}
