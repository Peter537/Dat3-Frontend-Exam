import { useState } from "react";
import DisplayState from "./DisplayState";
import ToggleButton from "./ToggleButton";

function LiftingStateUp() {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div>
      <ToggleButton onToggle={toggleState} />
      <DisplayState isOn={isOn} />
    </div>
  );
}

export default LiftingStateUp;
