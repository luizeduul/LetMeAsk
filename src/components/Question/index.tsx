import React, { ReactNode } from 'react';
import './styles.scss';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };

  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
};

const Question: React.FC<QuestionProps> = ({
  content,
  author,
  children,
}: QuestionProps) => {
  return (
    <div className="question">
      <p>{content}</p>
      <footer>
        <div className="user-information">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
};

export default Question;
