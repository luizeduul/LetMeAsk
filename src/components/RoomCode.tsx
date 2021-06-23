import React from 'react';

import copyImage from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
  code: string;
};

const RoomCode: React.FC<RoomCodeProps> = ({ code }: RoomCodeProps) => {
  const copyRoomCodeToClipboard = (): void => {
    navigator.clipboard.writeText(code);
  };

  return (
    <button
      type="button"
      className="room-code"
      onClick={copyRoomCodeToClipboard}
    >
      <div>
        <img src={copyImage} alt="Copy room code" />
      </div>
      <span>Sala #{code}</span>
    </button>
  );
};

export default RoomCode;
