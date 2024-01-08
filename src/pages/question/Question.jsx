/* eslint-disable react/prop-types */
import "./question.css";

function Question({ number, javascript, react, other }) {
  return (
    <div className="question-window">
      <h1>Question {number}</h1>
      <div className="dividing-line"></div>
      {javascript}
      <div className="dividing-line"></div>
      {react}
      <div className="dividing-line"></div>
      {other}
    </div>
  );
}

export default Question;
