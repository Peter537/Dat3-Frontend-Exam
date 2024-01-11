import { useState } from "react";
import QuestionElement from "../../../components/question-element/QuestionElement";

function ConditionalRendering() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h2>React - Conditional Rendering</h2>
      <QuestionElement
        questions={[
          "2. Describe how conditional rendering is achieved in React",
          "3. Provide an example of using the ternary operator for conditional rendering.",
        ]}
      />
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>
      {isOn ? <p>Text when ON</p> : <p>Text when OFF</p>}
    </div>
  );
}

export default ConditionalRendering;
