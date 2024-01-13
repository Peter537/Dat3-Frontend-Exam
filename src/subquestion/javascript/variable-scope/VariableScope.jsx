import QuestionElement from "../../../components/question-element/QuestionElement";
import variableScopeImg from "./variablescope.png";

function VariableScope() {
  // Global variable
  const globalVariable = "global";

  function accessLocalVariable() {
    // Local variable
    const localVariable = "local";
    console.log(localVariable);

    if (localVariable == "local") {
      // Block scope
      const blockVariable = "block";
      console.log(blockVariable);
    }

    // console.log(blockVariable); // ReferenceError: blockVariable is not defined
  }

  function accessGlobalVariable() {
    console.log(globalVariable);
    // console.log(localVariable); // ReferenceError: localVariable is not defined
    accessLocalVariable();
  }

  return (
    <div>
      <h2>JavaScript - Variable Scope</h2>
      <QuestionElement
        questions={[
          "1. What is the scope of a variable in JavaScript? Explain the difference between global and local scope",
        ]}
      />
      <div>
        <img className="variablescope-img" src={variableScopeImg} />
      </div>
      <button onClick={accessLocalVariable}>Log Local Variable</button>
      <button onClick={accessGlobalVariable}>Log Global Variable</button>
    </div>
  );
}

export default VariableScope;
