import QuestionElement from "../../../components/question-element/QuestionElement";

function WindowObject() {
  return (
    <div>
      <h2>JavaScript - Window Object</h2>
      <QuestionElement
        questions={[
          "1. What is the purpose of the window object in JavaScript?",
        ]}
      />
      <p>
        The window object represents the brower window that contains the DOM, so
        we can use it to access the DOM.
      </p>
      <p>WindowInnerHeight: {window.innerHeight}</p>
      <p>WindowLocationHref: {window.location.href}</p>
    </div>
  );
}

export default WindowObject;
