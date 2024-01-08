/* eslint-disable react/prop-types */
function Question({ number, javascript, react, other }) {
  return (
    <div>
      <h1>Question {number}</h1>
      <h2>Javascript</h2>
      {javascript}
      <h2>React</h2>
      {react}
      <h2>Other</h2>
      {other}
    </div>
  );
}

export default Question;
