import { useState } from "react";

function EventBubbling() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>JavaScript - Event Bubbling</h2>
      <button onClick={handleClick}>Click me</button>
      <div>Count: {count}</div>
    </div>
  );
}

export default EventBubbling;
