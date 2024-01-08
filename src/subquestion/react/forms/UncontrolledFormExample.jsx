function UncontrolledFormExample() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const description = event.target.elements.description.value;
    // Process the form data...
    console.log("Submitted value (uncontrolled):", { username, description });
    // Further processing or sending data to backend...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" />
      <textarea name="description" placeholder="Description" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledFormExample;
