import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { database } from '../../services/firebase';

// import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';

import Button from '../../components/Button';
import Question from '../../components/Question';
import RoomCode from '../../components/RoomCode';
import Modal from '../../components/Modal';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

import './styles.scss';

type RoomParams = {
  id: string;
};

const AdminRoom: React.FC = () => {
  // const { user } = useAuth();
  const history = useHistory();
  const params = useParams<RoomParams>();

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const roomId = params.id;

  const { title, questions } = useRoom(roomId);

  const handleDeleteQuestion = async (questionId: string): Promise<void> => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Tem certeza que deseja remover essa pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  };

  const handleCheckQuestionAnswered = async (
    questionId: string
  ): Promise<void> => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  };

  const handleHighlightQuestion = async (questionId: string): Promise<void> => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  };

  const handleEndRoom = (): void => {
    setModalIsVisible(true);
  };

  const handleConfirmDelete = async (): Promise<void> => {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    setModalIsVisible(false);
    history.push('/');
  };

  const handleCancell = (): void => {
    setModalIsVisible(false);
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
          <h1>Sala: {title}</h1>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </div>
        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt="Marcar pergunta como respondida"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Dar destaque a pergunta" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Deletar pergunta" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>

      {modalIsVisible ? (
        <Modal>
          <div className="modal-button-container">
            <Button onClick={handleCancell}>Cancelar</Button>
            <Button onClick={handleConfirmDelete}>Sim, encerrar</Button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default AdminRoom;
