function ListsKeys() {
  const items = ["Apple", "Banana", "Orange"];

  return (
    <div>
      <h2>Fruits List</h2>
      <div>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default ListsKeys;
