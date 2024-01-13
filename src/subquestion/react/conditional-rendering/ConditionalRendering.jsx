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
      {/* One liner */}
      {isOn ? <p>Text when ON</p> : <p>Text when OFF</p>}
      {/* Multiple lines */}
      {isOn ? (
        <div>
          <p>Multiple lines when ON</p>
          <p>One extra Line</p>
        </div>
      ) : (
        <div>
          <p>Multiple lines when OFF</p>
          <p>Here is another line</p>
        </div>
      )}
    </div>
  );
}

export default ConditionalRendering;
