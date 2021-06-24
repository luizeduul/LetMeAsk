import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { database } from '../../services/firebase';

// import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';

import Button from '../../components/Button';
import Question from '../../components/Question';
import RoomCode from '../../components/RoomCode';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';

import './styles.scss';

type RoomParams = {
  id: string;
};

const AdminRoom: React.FC = () => {
  // const { user } = useAuth();
  const history = useHistory();
  const params = useParams<RoomParams>();

  const roomId = params.id;

  const { title, questions } = useRoom(roomId);

  const handleDeleteQuestion = async (questionId: string): Promise<void> => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Tem certeza que deseja remover essa pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  };

  const handleEndRoom = async (): Promise<void> => {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push('/');
  };

  return (
    <div id="page-admin-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Logo letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </div>
        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Delete button" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default AdminRoom;
