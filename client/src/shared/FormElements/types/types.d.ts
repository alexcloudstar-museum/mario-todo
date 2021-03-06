export interface InputProps {
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: React.FormEvent) => void;
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}
