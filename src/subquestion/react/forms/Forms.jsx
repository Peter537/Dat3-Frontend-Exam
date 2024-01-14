import Examples from "../../../components/examples/Examples";
import KeyPoints from "../../../components/key-points/KeyPoints";
import QuestionElement from "../../../components/question-element/QuestionElement";
import ControlledFormExample from "./ControlledFormExample";
import UncontrolledFormExample from "./UncontrolledFormExample";

function Forms() {
  return (
    <div>
      <h2>React - Uncontrolled Forms & Controlled Forms</h2>
      <QuestionElement
        questions={[
          "2. How are controlled components different from uncontrolled components in React forms?",
          "3. Explain the role of the onChange event in form handling and show examples.",
        ]}
      />
      <KeyPoints
        keypoints={[
          "Controlled: using React state management",
          "Uncontrolled: refs, form submit event",
        ]}
      />
      <h3>Controlled Form</h3>
      <ControlledFormExample />
      <h3>Uncontrolled Form</h3>
      <UncontrolledFormExample />
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

export default Forms;
