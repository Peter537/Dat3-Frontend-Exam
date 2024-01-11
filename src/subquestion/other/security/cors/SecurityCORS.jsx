import QuestionElement from "../../../../components/question-element/QuestionElement";

function SecurityCORS() {
  return (
    <div>
      <h2>Security - CORS</h2>
      <QuestionElement
        questions={[
          "5. Describe conceptually what Same Origin Policy and CORS is, and how we avoid getting CORS errors when fetching data from an API.",
        ]}
      />
    </div>
  );
}

export default SecurityCORS;
