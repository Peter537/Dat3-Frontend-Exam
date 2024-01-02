import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Prototypes from "./javascript/prototypes/Prototypes";
import JavaScript from "./javascript/JavaScript";
import HigherOrderFunctions from "./javascript/higher-order-functions/HigherOrderFunctions";
import Packages from "./javascript/packages/Packages";
import Callback from "./javascript/callback/Callback";
import Async from "./javascript/async/Async";
import EventBubbling from "./javascript/event-bubbling/EventBubbling";
import Promises from "./javascript/promises/Promises";
import Storage from "./javascript/storage/Storage";
import VariableScope from "./javascript/variable-scope/VariableScope";
import WindowObject from "./javascript/window-object/WindowObject";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/javascript" element={<JavaScript />}>
            <Route path="prototypes" element={<Prototypes />} />
            <Route
              path="higher-order-functions"
              element={<HigherOrderFunctions />}
            />
            <Route path="packages" element={<Packages />} />
            <Route path="callback" element={<Callback />} />
            <Route path="async" element={<Async />} />
            <Route path="event-bubbling" element={<EventBubbling />} />
            <Route path="promises" element={<Promises />} />
            <Route path="storage" element={<Storage />} />
            <Route path="variable-scope" element={<VariableScope />} />
            <Route path="window-object" element={<WindowObject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
