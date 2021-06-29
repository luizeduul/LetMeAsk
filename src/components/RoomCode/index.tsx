import React from 'react';

import copyImage from '../../assets/images/copy.svg';

import { RoomCodeButton } from './styles';

type RoomCodeProps = {
  code: string;
};

const RoomCode: React.FC<RoomCodeProps> = ({ code }: RoomCodeProps) => {
  const copyRoomCodeToClipboard = (): void => {
    navigator.clipboard.writeText(code);
  };

  return (
    <RoomCodeButton
      type="button"
      className="room-code"
      onClick={copyRoomCodeToClipboard}
    >
      <div>
        <img src={copyImage} alt="Copy room code" />
      </div>
      <span>Sala #{code}</span>
    </RoomCodeButton>
  );
};

export default RoomCode;
