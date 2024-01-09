function VariableScope() {
  // Global variable
  let globalVariable = "global";

  function accessLocalVariable() {
    // Local variable
    let localVariable = "local";
    console.log(localVariable);

    if (localVariable == "local") {
      // Block scope
      let blockVariable = "block";
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
      <button onClick={accessLocalVariable}>Log Local Variable</button>
      <button onClick={accessGlobalVariable}>Log Global Variable</button>
    </div>
  );
}

export default VariableScope;
