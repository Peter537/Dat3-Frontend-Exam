import { useEffect, useState } from "react";

function UseEffectExample() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default UseEffectExample;
