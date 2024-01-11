import QuestionElement from "../../../../components/question-element/QuestionElement";

function RouterNavigation() {
  return (
    <div>
      <h2>Router - Navigation</h2>
      <QuestionElement
        questions={[
          "4. Explain how navigation works in React, and the difference from how it's done in a multipage application.",
          "5. Show an example of how navigation can be implemented in React",
        ]}
      />
    </div>
  );
}

export default RouterNavigation;
