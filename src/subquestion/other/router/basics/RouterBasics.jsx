/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionElement from "../../../../components/question-element/QuestionElement";
import KeyPoints from "../../../../components/key-points/KeyPoints";
import Examples from "../../../../components/examples/Examples";

function RouterBasics() {
  return (
    <div>
      <h2>Router - Basics</h2>
      <QuestionElement
        questions={[
          "4. Explain what React Router is and its purpose in a React application.",
          "5. Show an example of how routing works in React",
        ]}
      />
      <KeyPoints
        keypoints={[
          "React (SPA) har ingen indbygget Router",
          "Ligner en MPA, men uden request til server hver gang",
          "Stoppes serveren kan den stadig bruges eftersom alt er loaded ind",
        ]}
      />
      <Examples
        examples={[
          {
            type: "link",
            content:
              "https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/App.jsx#L77",
          },
        ]}
      />
    </div>
  );
}

export default RouterBasics;

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        {/* Selvom begge disse 2 urls ville være rigtige hvis man skrev '/user/new',
            så vælger React Routers matching algoritme at man nok vil ind på '/user/new' */}
        <Route path="/user/:id" element={<h1>User</h1>} />
        <Route path="/user/new" element={<h1>New User</h1>} />
        <Route path="/test" element={<h1>Test2</h1>} /> {/* Denne vises */}
        <Route path="/test" element={<h1>Test</h1>} /> {/* Denne vises ikke */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
