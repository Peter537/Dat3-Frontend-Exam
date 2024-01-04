function HigherOrderFunctions() {
  function modifyValue(value, modifier) {
    return modifier(value);
  }

  function increment(value) {
    return value + 1;
  }

  function decrement(value) {
    return value - 1;
  }

  function double(value) {
    return value * 2;
  }

  return (
    <div>
      <h1>Higher Order Functions</h1>
      <p>modifyValue(5, increment): {modifyValue(5, increment)}</p>
      <p>modifyValue(5, decrement): {modifyValue(5, decrement)}</p>
      <p>modifyValue(5, double): {modifyValue(5, double)}</p>
    </div>
  );
}

export default HigherOrderFunctions;
