import KeyPoints from "../../../components/key-points/KeyPoints";
import QuestionElement from "../../../components/question-element/QuestionElement";

function SpreadOperator() {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combinedArray = [...arr1, ...arr2]; // Combining arrays using spread operator

  const originalArray = [1, 2, 3];
  const copiedArray = [...originalArray]; // Creating a copy of the array

  // unpack element
  const person = {
    name: "Peter",
    age: 20,
  };
  const person2 = {
    ...person,
    email: "test@mail.dk",
  };

  function sum(...numbers) {
    // Rest as parameter
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  // Collecting elements
  const [first, second, ...rest] = [1, 2, 3, 4, 5];

  return (
    <div>
      <h2>JavaScript - Spread Operator</h2>
      <QuestionElement
        questions={[
          "1. What is the spread operator in JavaScript and how does it differ from the rest operator?",
        ]}
      />
      <KeyPoints
        keypoints={[
          "Spread: copy arrays, concat arrays, unpack elements",
          "Rest: collect elements, parameters",
        ]}
      />
      <h3>Array Concatenation</h3>
      <p>arr1: {arr1}</p>
      <p>arr2: {arr2}</p>
      <p>combinedArray: {combinedArray}</p>
      <h3>Copying Arrays</h3>
      <p>originalArray: {originalArray}</p>
      <p>copiedArray: {copiedArray}</p>
      <h3>Unpacking Elements</h3>
      <p>person: {person.name}</p>
      <p>person2: {person2.email}</p>
      <h3>Rest Parameter</h3>
      <p>sum(1, 2, 3): {sum(1, 2, 3)}</p>
      <h3>Destructuring</h3>
      <p>first: {first}</p>
      <p>second: {second}</p>
      <p>rest: {rest}</p>
    </div>
  );
}

export default SpreadOperator;
