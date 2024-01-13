import QuestionElement from "../../../components/question-element/QuestionElement";

function Packages() {
  return (
    <div>
      <h2>JavaScript - Packages</h2>
      <QuestionElement
        questions={[
          "1. What are the purposes and differences between the package.json and package-lock.json files?",
        ]}
      />
      <h3>package.json</h3>
      <h3>package-lock.json</h3>
    </div>
  );
}

export default Packages;
