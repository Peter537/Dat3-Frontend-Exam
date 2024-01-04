import { useState } from "react";
import SubComponent from "./SubComponent";

function PropState() {
  // State using useState
  const [count, setCount] = useState(0);

  // Handler to update state
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <SubComponent message="Hello from props!" />

      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default PropState;
