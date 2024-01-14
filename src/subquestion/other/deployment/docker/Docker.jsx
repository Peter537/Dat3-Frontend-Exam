import KeyPoints from "../../../../components/key-points/KeyPoints";
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
      <KeyPoints
        keypoints={[
          "GitHub Actions med git-workflow & Dockerfile",
          "VM på DigitalOcean med docker-compose.yml",
          "docker-compose up",
        ]}
      />
    </div>
  );
}

export default Docker;
