import { useState, useEffect } from "react";

function JSXExample() {
  // Using useState to manage state
  const [count, setCount] = useState(0);

  // Using useEffect to perform side effects
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  // Handling onClick event
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>React - JSX Example</h2>
      <div>Count: {count}</div>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

export default JSXExample;
