import React, { ReactNode } from 'react';
import cx from 'classnames';
import { QuestionContainer, UserInformation } from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };

  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

const Question: React.FC<QuestionProps> = ({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children,
}: QuestionProps) => {
  Question.defaultProps = {
    isAnswered: false,
    isHighlighted: false,
  };

  return (
    <QuestionContainer
      className={cx(
        'question',
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <UserInformation>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInformation>
        <div>{children}</div>
      </footer>
    </QuestionContainer>
  );
};

export default Question;
