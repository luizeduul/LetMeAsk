import React, { ReactNode } from 'react';
import dropImg from '../../assets/images/drop.svg';
import trashImg from '../../assets/images/deleteIcon.svg';

import './styles.scss';

type ModalProps = {
  children?: ReactNode;
  isVisible?: boolean;
  title: string;
  description: string;
  icon: 'delete-question' | 'end-room';
};

const Modal: React.FC<ModalProps> = ({
  children,
  isVisible,
  title,
  description,
  icon,
}) => {
  return (
    <div className={`modal-container ${isVisible ? 'hidden' : ''}`}>
      <div className="modal">
        <div>
          <img src={icon === 'end-room' ? dropImg : trashImg} alt={title} />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Modal;
