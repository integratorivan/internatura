import { ReactNode } from 'react';
import './style.css';

type ButtonProps = {
  children: ReactNode;
  onClick: (...args: any) => void;
  type: 'button' | 'submit';
  className?: string;
}

export const Button = ({ children, ...props }: ButtonProps) => (
  <button className="base" {...props} type="button">
    {children}
  </button>
);
