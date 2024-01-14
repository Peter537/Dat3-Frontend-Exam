import { useState } from "react";
import DisplayState from "./DisplayState";
import ToggleButton from "./ToggleButton";
import QuestionElement from "../../../components/question-element/QuestionElement";
import KeyPoints from "../../../components/key-points/KeyPoints";
import Examples from "../../../components/examples/Examples";

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
      <KeyPoints
        keypoints={[
          "En sandhedskilde: sikre data, nemmere at vedligeholde og udvide applikationen",
        ]}
      />
      <ToggleButton onToggle={toggleState} />
      <DisplayState isOn={isOn} />
      <Examples
        examples={[
          {
            type: "link",
            content:
              "https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/App.jsx#L51",
          },
        ]}
      />
    </div>
  );
}

export default LiftingStateUp;
