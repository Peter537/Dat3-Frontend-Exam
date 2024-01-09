import { useState } from "react";

function SpreadOperator() {
  const [age, setAge] = useState(20);
  const [person, setPerson] = useState({ name: "Peter", age: 20 });
  const array1 = [1, 2, 3];
  const array2 = [...array1, 4, 5, 6];

  person.toString = function () {
    return `${this.name} is ${this.age} years old`;
  };

  function handleClick() {
    setPerson({ ...person, age: age });
  }

  return (
    <div>
      <h2>JavaScript - Spread Operator</h2>
      <p>array1: {array1}</p>
      <p>array2: {array2}</p>
      <p>person1: {person.toString()}</p>
      <input
        type="number"
        placeholder="new age"
        onChange={(event) => setAge(event.target.value)}
      />
      <button onClick={handleClick}>Set</button>
    </div>
  );
}

export default SpreadOperator;
