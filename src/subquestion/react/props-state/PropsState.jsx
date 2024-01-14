import { useState } from "react";
import SubComponent from "./SubComponent";
import QuestionElement from "../../../components/question-element/QuestionElement";
import KeyPoints from "../../../components/key-points/KeyPoints";
import Examples from "../../../components/examples/Examples";

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
      <KeyPoints
        keypoints={[
          "Props: properties, read-only, genanvendelige komponenter",
          "State: mutable, bruges til at opdatere UI",
        ]}
      />
      <SubComponent message="Hello from props!" />
      <SubComponent message="Hello again from props!" />
      <div>Count: {count}</div>
      <button onClick={incrementCount}>Increment</button>
      <Examples
        examples={[
          {
            type: "link",
            content:
              "https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/components/MyProfile/EditProfile.jsx#L7",
          },
        ]}
      />
    </div>
  );
}

export default PropState;
