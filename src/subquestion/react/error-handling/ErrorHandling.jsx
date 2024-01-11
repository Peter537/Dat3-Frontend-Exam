import QuestionElement from "../../../components/question-element/QuestionElement";
import { ErrorBoundary } from "./ErrorBoundary";

function ErrorHandling() {
  return (
    <ErrorBoundary>
      <div>
        <h2>React - Error Handling</h2>
        <QuestionElement questions={["2. Explain the following code"]} />
        <p>
          This is an example of error handling in React. If you click on the
          button below, it will throw an error and the error boundary will catch
          it and display a fallback UI.
        </p>
        <button
          onClick={() => {
            throw new Error("Error!");
          }}
        >
          Click me
        </button>
      </div>
    </ErrorBoundary>
  );
}

export default ErrorHandling;
