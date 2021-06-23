import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import Button from '../../components/Button';

import ilustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import '../../styles/auth.scss';

const Home: React.FC = () => {
  const history = useHistory();
  const { signInWithGoogle, user } = useAuth();

  const handleCreateRoom = async (): Promise<void> => {
    if (!user) {
      signInWithGoogle();
    }

    history.push('/rooms/new');
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
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
