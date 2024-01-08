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
      <h2>React - Props and State</h2>
      <SubComponent message="Hello from props!" />
      <div>Count: {count}</div>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default PropState;
