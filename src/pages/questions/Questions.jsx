import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { questions as allQuestions } from "../../components/routes/Routes";
import "./questions.css";

function Questions() {
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const [showTopWindow, setShowTopWindow] = useState(true);

  useEffect(() => {
    setQuestions(allQuestions);
  }, []);

  useEffect(() => {
    setShowTopWindow(location.pathname == "/question");
  }, [location]);

  return (
    <div>
      {showTopWindow && (
        <div className="questions-window">
          <h1>Questions</h1>
          {questions?.map((route, index) => (
            <div className="question-element" key={index}>
              <Link to={route.number}>Question {route.number}</Link>
            </div>
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Questions;
