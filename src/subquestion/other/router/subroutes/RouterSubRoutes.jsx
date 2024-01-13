import QuestionElement from "../../../../components/question-element/QuestionElement";

function RouterSubRoutes() {
  return (
    <div>
      <h2>Router - Sub Routes</h2>
      <QuestionElement
        questions={[
          "4. Explain how sub routing / nested routing is working",
          "5. Show an example of using sub routing / nested routing with the <Outlet/> element.",
        ]}
      />
    </div>
  );
}

export default RouterSubRoutes;
