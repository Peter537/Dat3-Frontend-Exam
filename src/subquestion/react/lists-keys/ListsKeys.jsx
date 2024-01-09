import { useState } from "react";

function ListsKeys() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

  return (
    <div>
      <h2>React - Lists & Keys</h2>
      <h3>Fruits List</h3>
      <div>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <button onClick={() => setItems([...items, "Pineapple"])}>
        Add Pineapple
      </button>
    </div>
  );
}

export default ListsKeys;
