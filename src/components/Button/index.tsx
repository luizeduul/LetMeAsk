/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes } from 'react';
import './styles.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

const Button: React.FC<ButtonProps> = ({ isOutlined = false, ...rest }) => {
  return (
    <button className={`button ${isOutlined ? 'outlined' : ''}`} {...rest} />
  );
};

export default Button;
