import UseEffectExample from "./UseEffectExample";
import UseStateExample from "./UseStateExample";

function Hooks() {
  return (
    <div>
      <h1>Hooks</h1>
      <h3>useState</h3>
      <UseStateExample />
      <h3>useEffect</h3>
      <UseEffectExample />
    </div>
  );
}

export default Hooks;