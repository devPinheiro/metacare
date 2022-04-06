import * as React from 'react';


// interfaces
interface ButtonProps {
  id: string;
  action?: () => void;
  isLoading?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  customStyle: string;
}

const Button: React.FC<ButtonProps> = ({
  id,
  action,
  isLoading,
  children,
  disabled = false,
  customStyle
}) => {


  return <button aria-label='button' id={id} onClick={action} disabled={disabled} className={customStyle}>{isLoading? 'Loading...' : children}</button>;
      
};


export default Button;
