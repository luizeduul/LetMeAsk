import React, { ReactNode } from 'react';
import dropImg from '../../assets/images/drop.svg';
import './styles.scss';

type ModalProps = {
  children?: ReactNode;
  isVisible?: boolean;
};

const Modal: React.FC<ModalProps> = ({ children, isVisible }) => {
  return (
    <div className={`modal-container ${isVisible ? 'hidden' : ''}`}>
      <img src={dropImg} alt="Dropimage" />
      <h1>Encerrar sala</h1>
      {children}
    </div>
  );
};

export default Modal;
