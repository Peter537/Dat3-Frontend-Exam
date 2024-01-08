import { useState } from "react";

function ConditionalRendering() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h2>React - Conditional Rendering</h2>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>
      {isOn ? <p>Text when ON</p> : <p>Text when OFF</p>}
    </div>
  );
}

export default ConditionalRendering;
