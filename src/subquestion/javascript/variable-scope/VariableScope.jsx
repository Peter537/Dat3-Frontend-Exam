function VariableScope() {
  // Global variable
  let globalVariable = "I am a global variable";

  function localVariable() {
    // Local variable
    let localVariable = "I am a local variable";
    console.log(localVariable);
  }

  function accessGlobalVariable() {
    console.log(globalVariable);
  }

  return (
    <div>
      <h2>JavaScript - Variable Scope</h2>
      <button onClick={localVariable}>Log Local Variable</button>
      <button onClick={accessGlobalVariable}>Log Global Variable</button>
    </div>
  );
}

export default VariableScope;
