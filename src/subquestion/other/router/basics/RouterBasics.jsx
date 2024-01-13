/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionElement from "../../../../components/question-element/QuestionElement";

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
