import React from 'react';

const QuizList = ({ quizzes }) => {
  return (
    <div>
      <h2>Quiz List</h2>
      {quizzes.map((quiz, index) => (
        <div key={index}>
          <h3>{quiz.title}</h3>
          <ul>
            {quiz.questions.map((question, i) => (
              <li key={i}>{question}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
