import { useState } from "react";
import QuestionElement from "../../../components/question-element/QuestionElement";
import KeyPoints from "../../../components/key-points/KeyPoints";
import Examples from "../../../components/examples/Examples";

function EventHandling() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Handle form data or submit to backend...
    console.log("Form submitted with value:", inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>React - Event Handling</h2>
      <QuestionElement
        questions={[
          "2. How are events handled in React compared to vanilla javascript?",
          "3. Show examples of how to handle form submit events, and how to handle input change events.",
        ]}
      />
      <KeyPoints
        keypoints={[
          "Syntetiske events: forskellige browsers giver forskellig respons på samme event, React oversætter til samme respons hver gang",
          "Declarative approach: vi forklarer hvad vi vil have sker, React tager sig af at binde det til DOM'en",
        ]}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
        <button type="submit">Submit</button>
      </form>
      <Examples
        examples={[
          {
            type: "link",
            content:
              "https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/components/MyProfile/EditProfile.jsx#L38",
          },
        ]}
      />
    </div>
  );
}

export default EventHandling;
