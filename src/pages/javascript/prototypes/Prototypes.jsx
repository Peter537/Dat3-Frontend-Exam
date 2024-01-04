function Prototypes() {
  let person = {
    name: "Peter",
    age: 20,
  };

  person.info = function () {
    return `${this.name} is ${this.age} years old.`;
  };

  return (
    <div>
      <h1>Prototypes</h1>
      <p>person.info(): {person.info()}</p>
    </div>
  );
}

export default Prototypes;
