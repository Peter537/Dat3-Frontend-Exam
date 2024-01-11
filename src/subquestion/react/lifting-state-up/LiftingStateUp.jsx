import { useState } from "react";
import DisplayState from "./DisplayState";
import ToggleButton from "./ToggleButton";
import QuestionElement from "../../../components/question-element/QuestionElement";

function LiftingStateUp() {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div>
      <h2>React - Lifting State Up</h2>
      <QuestionElement
        questions={[
          "2. What is the purpose of lifting state up in React?",
          "3. Show how you would lift state up in a React application.",
        ]}
      />
      <ToggleButton onToggle={toggleState} />
      <DisplayState isOn={isOn} />
    </div>
  );
}

export default LiftingStateUp;
