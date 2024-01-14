import KeyPoints from "../../../components/key-points/KeyPoints";
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
      <KeyPoints
        keypoints={[
          "package.json: information, scripts, versioner (ligesom pom.xml)",
          "package-lock.json: låser versionsnumre, så alle udviklere bruger samme versioner af modules",
        ]}
      />
    </div>
  );
}

export default Packages;
