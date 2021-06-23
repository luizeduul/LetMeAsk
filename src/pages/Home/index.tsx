import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import Button from '../../components/Button';

import ilustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import '../../styles/auth.scss';

const Home: React.FC = () => {
  const history = useHistory();
  const [roomCode, setRoomCode] = useState('');

  const { signInWithGoogle, user } = useAuth();

  const handleCreateRoom = async (): Promise<void> => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  };

  const handleJoinRoom = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      // eslint-disable-next-line no-alert
      alert('Room this not exists');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  };

  return (
    <div id="page-auth">
      <aside>
        <img
          src={ilustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire suas dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Let me ask" />
          <button
            type="button"
            onClick={handleCreateRoom}
            className="create-room"
          >
            <img src={googleIconImg} alt="Logo da Google" />
            Crie sua sala com o google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
