import React, { useState } from 'react';

const QuizForm = ({ addQuiz }) => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleQuestionChange = (index, event) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = event.target.value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuiz = {
      title,
      questions,
    };
    addQuiz(newQuiz);
    setTitle('');
    setQuestions([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Questions:</label>
        {questions.map((question, index) => (
          <input
            key={index}
            type="text"
            value={question}
            onChange={(e) => handleQuestionChange(index, e)}
            required
          />
        ))}
        <button type="button" onClick={addQuestion}>Add Question</button>
      </div>
      <button type="submit">Create Quiz</button>
    </form>
  );
};

export default QuizForm;
