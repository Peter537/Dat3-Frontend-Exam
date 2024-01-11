import QuestionElement from "../../../components/question-element/QuestionElement";

/* eslint-disable react/no-unescaped-entities */
function Callback() {
  /*
   * A callback function is a function passed into another function as an argument
   */
  function hello(name, callback) {
    console.log(`Hello ${name}`);
    setTimeout(() => {
      callback(name);
    }, 1000);
  }

  function goodbye(name) {
    console.log(`Goodbye ${name}`);
  }

  return (
    <div>
      <h2>JavaScript - Callback</h2>
      <QuestionElement
        questions={[
          "1. What is a callback function in JavaScript and when would you use one?",
        ]}
      />
      <p>hello("Peter", goodbye): {hello("Peter", goodbye)}</p>
    </div>
  );
}

export default Callback;
