import { useRef } from "react";

function UncontrolledFormExample() {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const description = event.target.elements.description.value;
    // Process the form data...
    console.log("Submitted value (uncontrolled):", { username, description });
    // Further processing or sending data to backend...
  };

  const handleRefSubmit = (event) => {
    event.preventDefault();

    const username = inputRef.current.value;
    // Process the form data...
    console.log("Submitted value (useRef):", { username });
    // Further processing or sending data to backend...
  };

  return (
    <div>
      <h4>Form onSubmit</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <textarea name="description" placeholder="Description" />
        <button type="submit">Submit</button>
      </form>
      <h4>useRef</h4>
      <input ref={inputRef} type="text" placeholder="Username" />
      <button onClick={handleRefSubmit}>Submit</button>
    </div>
  );
}

export default UncontrolledFormExample;
