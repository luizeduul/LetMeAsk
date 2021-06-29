/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

const Button: React.FC<ButtonProps> = ({ isOutlined = false, ...rest }) => {
  return (
    <ButtonContainer className={`${isOutlined ? 'outlined' : ''}`} {...rest} />
  );
};

export default Button;
