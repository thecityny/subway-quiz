type QuestionProps = {
  number: number;
};

export const Question: React.FC<QuestionProps> = ({ number }) => (
  <div>
    <h1>Question {number}</h1>
  </div>
);
