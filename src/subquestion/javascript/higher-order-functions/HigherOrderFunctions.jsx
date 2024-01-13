import QuestionElement from "../../../components/question-element/QuestionElement";

function HigherOrderFunctions() {
  /*
   * Has a function as an argument
   */
  function modifyValue(value, modifier) {
    return modifier(value);
  }

  function increment(value) {
    return value + 1;
  }

  function decrement(value) {
    return value - 1;
  }

  function double(value) {
    return value * 2;
  }

  /*
   * Returns a function
   */
  function multiplyBy(multiplier) {
    return function (value) {
      return value * multiplier;
    };
  }

  const multiplyByFive = multiplyBy(5);

  /*
   * Indbygget function (map)
   */
  const numbers = [1, 2, 3, 4, 5];

  const squaredNumbers = numbers.map(function (number) {
    return number * number;
  });

  return (
    <div>
      <h2>JavaScript - Higher Order Functions</h2>
      <QuestionElement
        questions={[
          "1. What are higher-order functions in JavaScript? Give an example.",
        ]}
      />
      <p>modifyValue(5, increment): {modifyValue(5, increment)}</p>
      <p>modifyValue(5, decrement): {modifyValue(5, decrement)}</p>
      <p>modifyValue(5, double): {modifyValue(5, double)}</p>
      <p>multiplyByFive(5): {multiplyByFive(5)}</p>
      <p>multiplyByFive(10): {multiplyByFive(10)}</p>
      <p>squaredNumbers: {squaredNumbers.join(", ")}</p>
    </div>
  );
}

export default HigherOrderFunctions;
