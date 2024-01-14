import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { questions } from "./components/routes/Routes";
import Questions from "./pages/questions/Questions";
import Question from "./pages/question/Question";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
