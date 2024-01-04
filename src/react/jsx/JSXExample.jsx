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
      <h1>Count: {count}</h1>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

export default JSXExample;
