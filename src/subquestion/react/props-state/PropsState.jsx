import { useState } from "react";
import SubComponent from "./SubComponent";
import QuestionElement from "../../../components/question-element/QuestionElement";

function PropState() {
  // State using useState
  const [count, setCount] = useState(0);

  // Handler to update state
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>React - Props and State</h2>
      <QuestionElement
        questions={[
          "2. Describe the purpose of props in React.",
          "3. Explain the role of state in a React component.",
        ]}
      />
      <SubComponent message="Hello from props!" />
      <div>Count: {count}</div>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default PropState;
