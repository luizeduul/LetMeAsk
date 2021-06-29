import React, { ReactNode } from 'react';
import dropImg from '../../assets/images/drop.svg';
import trashImg from '../../assets/images/deleteIcon.svg';

import { ModalContainer, ModalButtonContainer } from './styles';

type ModalProps = {
  children?: ReactNode;
  title: string;
  description: string;
  icon: 'delete-question' | 'end-room';
};

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  description,
  icon,
}) => {
  return (
    <ModalContainer>
      <div>
        <div>
          <img src={icon === 'end-room' ? dropImg : trashImg} alt={title} />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
        <ModalButtonContainer>{children}</ModalButtonContainer>
      </div>
    </ModalContainer>
  );
};

export default Modal;
