import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CodeExecutor from "./components/code-executor/CodeExecutor";
import Header from "./components/header/Header";
import { questions } from "./components/routes/Routes";
import Questions from "./pages/questions/Questions";
import Question from "./pages/question/Question";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/question" element={<Questions />}>
          {questions.map((question, index) => (
            <Route
              key={index}
              path={question.number}
              element={
                <Question
                  number={question.number}
                  javascript={question.javascript}
                  react={question.react}
                  other={question.other}
                />
              }
            />
          ))}
        </Route>
        <Route path="code-executor" element={<CodeExecutor />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
