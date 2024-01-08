import ControlledFormExample from "./ControlledFormExample";
import UncontrolledFormExample from "./UncontrolledFormExample";

function Forms() {
  return (
    <div>
      <h2>React - Uncontrolled Forms & Controlled Forms</h2>
      <h3>Controlled Form</h3>
      <ControlledFormExample />
      <h3>Uncontrolled Form</h3>
      <UncontrolledFormExample />
    </div>
  );
}

export default Forms;
