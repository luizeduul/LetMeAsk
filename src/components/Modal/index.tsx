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
      <div>
        <img src={dropImg} alt="Dropimage" />
      </div>
      <h1>Encerrar sala</h1>
      <p>Tem certeza que deseja encerrar essa sala?</p>
      {children}
    </div>
  );
};

export default Modal;
