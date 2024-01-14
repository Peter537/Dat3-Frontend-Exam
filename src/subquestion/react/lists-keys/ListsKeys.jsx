import { useState } from "react";
import QuestionElement from "../../../components/question-element/QuestionElement";
import KeyPoints from "../../../components/key-points/KeyPoints";
import Examples from "../../../components/examples/Examples";

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
      <KeyPoints
        keypoints={[
          "Identificerer elementer i en liste, dermed mindre DOM operationer",
          "Vigtigt: Key skal være unik, kan være problemer med index som key",
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
      <Examples
        examples={[
          {
            type: "link",
            content:
              "https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/components/MyProfile/EditProfile.jsx#L42",
          },
        ]}
      />
    </div>
  );
}

export default ListsKeys;
