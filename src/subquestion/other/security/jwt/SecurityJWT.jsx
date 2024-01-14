import Examples from "../../../../components/examples/Examples";
import KeyPoints from "../../../../components/key-points/KeyPoints";
import QuestionElement from "../../../../components/question-element/QuestionElement";

function SecurityJWT() {
  return (
    <div>
      <h2>Security - JWT</h2>
      <QuestionElement
        questions={[
          "4. Describe conceptually the typical flow of using JWTs for user authentication in a React application",
          "4. Describe and show how we log in a user in React with JWT.",
        ]}
      />
      <KeyPoints
        keypoints={[
          "Brugeren logger ind på siden",
          "Vi gemmer token i storage",
          "Vi bruger token fra Storage til API requests",
          "Vores server verificerer token inden den giver respons",
        ]}
      />
      <a href="https://jwt.io/">jwt.io</a>
      <div>
        Eksempel token:
        <div>
          <code>
            eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjcGhidXNpbmVzcy5kayIsInN1YiI6InVzZXIiLCJleHAiOjE3MDQ4MTc0OTksInVzZXJJZCI6NCwidXNlcm5hbWUiOiJ1c2VyIn0.taP3N39xI6KEZbVQ-8OYzQzQZuZ1CqktpageD2KQ5Fs
          </code>
        </div>
      </div>
      <Examples
        examples={[
          {
            type: "link",
            content:
              "https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/pages/Login/Login.jsx#L21",
          },
          {
            type: "link",
            content:
              "https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/util/api.mjs#L11",
          },
          {
            type: "link",
            content:
              "https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/util/api.mjs#L53",
          },
        ]}
      />
    </div>
  );
}

export default SecurityJWT;
