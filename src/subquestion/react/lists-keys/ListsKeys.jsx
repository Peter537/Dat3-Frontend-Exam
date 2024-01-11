import { useState } from "react";
import QuestionElement from "../../../components/question-element/QuestionElement";

function ListsKeys() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

  return (
    <div>
      <h2>React - Lists & Keys</h2>
      <QuestionElement
        questions={[
          "2. What is the purpose of the key attribute in React lists?",
          "3. Explain how the map function is used for rendering lists in React.",
        ]}
      />
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
