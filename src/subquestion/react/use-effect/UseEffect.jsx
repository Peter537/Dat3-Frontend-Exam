import { useEffect, useState } from "react";

function UseEffect() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
    setValue(1);
  }, []);

  useEffect(() => {
    console.log("value changed to: ", value);
  }, [value]);

  useEffect(() => {
    console.log("a value has changed");
  }, [value, value2]);

  return (
    <div>
      <h2>React - Use Effect</h2>
      <div>Value: {value}</div>
      <div>Value2: {value2}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue2(value2 + 1)}>Increment2</button>
    </div>
  );
}

export default UseEffect;
