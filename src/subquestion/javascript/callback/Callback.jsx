/* eslint-disable react/no-unescaped-entities */
function Callback() {
  function hello(name, callback) {
    console.log(`Hello ${name}`);
    setTimeout(() => {
      callback(name);
    }, 1000);
  }

  function goodbye(name) {
    console.log(`Goodbye ${name}`);
  }

  return (
    <div>
      <h1>Callback</h1>
      <p>hello("Peter", goodbye): {hello("Peter", goodbye)}</p>
    </div>
  );
}

export default Callback;
