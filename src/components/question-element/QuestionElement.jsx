/* eslint-disable react/prop-types */
import "./questionelement.css";

function QuestionElement({ questions }) {
  return (
    <div className="question-element-container">
      {questions.map((question, index) => (
        <div key={index}>{question}</div>
      ))}
    </div>
  );
}

export default QuestionElement;
