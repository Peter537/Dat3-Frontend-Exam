import { useState } from "react";
import QuestionElement from "../../../components/question-element/QuestionElement";

function JSXExample() {
  // Using useState to manage state
  const [count, setCount] = useState(0);

  // Handling onClick event
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>React - JSX Example</h2>
      <QuestionElement
        questions={[
          "2. What is JSX? Provide an example.",
          "3. How does JSX differ from HTML?",
        ]}
      />
      <div>Count: {count}</div>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

export default JSXExample;
