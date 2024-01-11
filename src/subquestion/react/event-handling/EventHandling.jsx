import { useState } from "react";
import QuestionElement from "../../../components/question-element/QuestionElement";

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EventHandling;
