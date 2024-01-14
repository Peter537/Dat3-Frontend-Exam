import KeyPoints from "../../../components/key-points/KeyPoints";
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
      <KeyPoints
        keypoints={[
          "Window object: browser window (interaktion mellem JS og browser)",
          "indeholder fx. document, location, console m.m.",
        ]}
      />
      <p>WindowInnerHeight: {window.innerHeight}</p>
      <p>WindowLocationHref: {window.location.href}</p>
    </div>
  );
}

export default WindowObject;
