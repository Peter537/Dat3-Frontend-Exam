import { useState, useEffect } from "react";

function ComponentLifeCycle() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  // useEffect with an empty dependency array - runs once after the initial render
  useEffect(() => {
    console.log("Component mounted");
    // Cleanup function (returned from useEffect) runs on component unmount
    return () => {
      console.log("Component unmounted");
    };
  }, []); // Empty dependency array

  // useEffect with specific dependencies - runs when value1 changes
  useEffect(() => {
    console.log("Value 1 changed:", value1);
    // Some side effect based on value1...
  }, [value1]); // Dependency array with value1

  // useEffect with multiple dependencies - runs when either value1 or value2 changes
  useEffect(() => {
    console.log("Either Value 1 or Value 2 changed:", value1, value2);
    // Some side effect based on value1 or value2...
  }, [value1, value2]); // Dependency array with both value1 and value2

  return (
    <div>
      <button onClick={() => setValue1(value1 + 1)}>Increment Value 1</button>
      <button onClick={() => setValue2(value2 + 1)}>Increment Value 2</button>
    </div>
  );
}

export default ComponentLifeCycle;
