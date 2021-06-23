import React from 'react';
import { Link } from 'react-router-dom';

// import { useAuth } from '../../hooks/useAuth';

import Button from '../../components/Button';

import ilustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import '../../styles/auth.scss';

const NewRoom: React.FC = () => {
  // const { user } = useAuth();

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
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui.</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default NewRoom;
