import QuestionElement from "../../../../components/question-element/QuestionElement";

function Docker() {
  return (
    <div>
      <h2>Deployment - Docker</h2>
      <QuestionElement
        questions={[
          "4. Describe conceptually how we deploy a React frontend application to a docker container on a virtual machine.",
        ]}
      />
    </div>
  );
}

export default Docker;
