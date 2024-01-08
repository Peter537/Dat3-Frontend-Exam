function ListsKeys() {
  const items = ["Apple", "Banana", "Orange"];

  return (
    <div>
      <h2>React - Lists & Keys</h2>
      <h3>Fruits List</h3>
      <div>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default ListsKeys;
