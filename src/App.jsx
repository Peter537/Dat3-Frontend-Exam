import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CodeExecutor from "./components/code-executor/CodeExecutor";
import Header from "./components/header/Header";
import { routes } from "./components/routes/Routes";
import TopicWindow from "./components/topic-window/TopicWindow";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header routes={routes} />
      </header>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<TopicWindow topic={route.name} pathname={route.path} />}
          >
            {route.subroutes?.map((subroute, index) => (
              <Route
                key={index}
                path={subroute.path}
                element={subroute.content}
              />
            ))}
          </Route>
        ))}
        <Route path="code-executor" element={<CodeExecutor />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
