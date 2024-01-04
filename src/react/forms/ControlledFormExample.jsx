import { useState } from "react";

function ControlledFormExample() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted value (controlled):", inputValue);
    // Further processing or sending data to backend...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Controlled Input"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledFormExample;
