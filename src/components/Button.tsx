/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ ...rest }) => {
  return <button className="button" {...rest} />;
};

export default Button;
