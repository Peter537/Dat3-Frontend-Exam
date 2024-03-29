/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionElement from "../../../../components/question-element/QuestionElement";
import KeyPoints from "../../../../components/key-points/KeyPoints";
import Examples from "../../../../components/examples/Examples";

function RouterNavigation() {
  return (
    <div>
      <h2>Router - Navigation</h2>
      <QuestionElement
        questions={[
          "4. Explain how navigation works in React, and the difference from how it's done in a multipage application.",
          "5. Show an example of how navigation can be implemented in React",
        ]}
      />
      <KeyPoints
        keypoints={[
          "React er SPA, så navigation involverer ikke fuldt page reload",
          "Komponenter skifter dynamisk når navigation ændres",
          "Langsommere inital load pga. større filer hentes, derefter hurtigere",
          "React Router lytter på URL og skifter komponenter",
        ]}
      />
      <Examples
        examples={[
          {
            type: "link",
            content:
              "https://github.com/Peter537/Dat3-DnD-Character-Builder/blob/dev/frontend/src/components/Header/Header.jsx#L18",
          },
        ]}
      />
    </div>
  );
}

export default RouterNavigation;

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
