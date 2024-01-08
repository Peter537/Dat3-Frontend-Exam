import { useState } from "react";

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
