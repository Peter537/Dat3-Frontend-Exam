import UseEffectExample from "./UseEffectExample";
import UseStateExample from "./UseStateExample";

function Hooks() {
  return (
    <div>
      <h2>React - Hooks</h2>
      <h3>useState</h3>
      <UseStateExample />
      <h3>useEffect</h3>
      <UseEffectExample />
      <h3>Error Handling</h3>
    </div>
  );
}

export default Hooks;
