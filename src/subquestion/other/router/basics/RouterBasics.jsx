import QuestionElement from "../../../../components/question-element/QuestionElement";

function RouterBasics() {
  return (
    <div>
      <h2>Router - Basics</h2>
      <QuestionElement
        questions={[
          "4. Explain what React Router is and its purpose in a React application.",
          "5. Show an example of how routing works in React",
        ]}
      />
    </div>
  );
}

export default RouterBasics;
