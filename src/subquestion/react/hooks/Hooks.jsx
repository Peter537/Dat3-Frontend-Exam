import KeyPoints from "../../../components/key-points/KeyPoints";
import QuestionElement from "../../../components/question-element/QuestionElement";
import ErrorExample from "./ErrorExample";
import UseEffectExample from "./UseEffectExample";
import UseStateExample from "./UseStateExample";

function Hooks() {
  return (
    <div>
      <h2>React - Hooks</h2>
      <QuestionElement
        questions={[
          "2. What are React Hooks? Provide examples of at least two built-in hooks.",
          "3. Explain the difference between useState and useEffect.",
          "4. Show example of how you handle errors in React.",
        ]}
      />
      <KeyPoints
        keypoints={[
          "Error handling: try-catch, if-else (ternary), promise.catch(), ErrorBoundary",
        ]}
      />
      <h3>useState</h3>
      <UseStateExample />
      <h3>useEffect</h3>
      <UseEffectExample />
      <h3>Error Handling</h3>
      <ErrorExample />
    </div>
  );
}

export default Hooks;
