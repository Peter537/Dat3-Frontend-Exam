import { useState } from "react";

function ConditionalRendering() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>
      {isOn ? <p>Text when ON</p> : <p>Text when OFF</p>}
    </div>
  );
}

export default ConditionalRendering;
