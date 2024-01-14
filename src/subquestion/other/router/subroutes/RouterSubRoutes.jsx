import Examples from "../../../../components/examples/Examples";
import KeyPoints from "../../../../components/key-points/KeyPoints";
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
      <KeyPoints
        keypoints={[
          "Sub-routing er en teknik som involverer applikationens rutehieraki",
          "Giver en træstruktur som kan gøre en kompleks applikation mere overskuelig",
        ]}
      />
      <Examples
        examples={[
          {
            type: "link",
            content:
              "https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/App.jsx#L92",
          },
        ]}
      />
    </div>
  );
}

export default RouterSubRoutes;
