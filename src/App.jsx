import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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
import React from "./react/React";

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
          <Route path="/react" element={<React />}>
            <Route path="component-basic" element={<h1>Component Basic</h1>} />
            <Route path="jsx" element={<h1>JSX</h1>} />
            <Route path="props-state" element={<h1>Props State</h1>} />
            <Route
              path="component-lifecycle"
              element={<h1>Component Lifecycle</h1>}
            />
            <Route path="event-handling" element={<h1>Event Handling</h1>} />
            <Route
              path="conditional-rendering"
              element={<h1>Conditional Rendering</h1>}
            />
            <Route path="lists-keys" element={<h1>Lists Keys</h1>} />
            <Route path="forms" element={<h1>Forms</h1>} />
            <Route path="hooks" element={<h1>Hooks</h1>} />
            <Route path="error-handling" element={<h1>Error Handling</h1>} />
            <Route
              path="lifting-state-up"
              element={<h1>Lifting State Up</h1>}
            />
          </Route>
          <Route
            path="/other"
            element={
              <div>
                <h1>Other</h1>
                <Outlet />
              </div>
            }
          >
            <Route
              path="router"
              element={
                <div>
                  <h1>Router</h1>
                  <Outlet />
                </div>
              }
            >
              <Route path="basics" element={<h1>Basics</h1>} />
              <Route path="navigation" element={<h1>Navigation</h1>} />
              <Route path="sub-routes" element={<h1>Sub Routes</h1>} />
            </Route>
            <Route
              path="security"
              element={
                <div>
                  <h1>Security</h1>
                  <Outlet />
                </div>
              }
            >
              <Route path="jwt" element={<h1>JWT</h1>} />
              <Route path="cors" element={<h1>CORS</h1>} />
            </Route>
            <Route
              path="styling"
              element={
                <div>
                  <h1>Styling</h1>
                  <Outlet />
                </div>
              }
            >
              <Route path="flexbox-grid" element={<h1>Flexbox Grid</h1>} />
              <Route path="media-queries" element={<h1>Media Queries</h1>} />
              <Route
                path="design-principles"
                element={<h1>Design Principles</h1>}
              />
            </Route>
            <Route
              path="deployment"
              element={
                <div>
                  <h1>Deployment</h1>
                  <Outlet />
                </div>
              }
            >
              <Route path="docker" element={<h1>Docker</h1>} />
              <Route path="domain" element={<h1>Domain</h1>} />
              <Route path="https" element={<h1>HTTPS</h1>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
