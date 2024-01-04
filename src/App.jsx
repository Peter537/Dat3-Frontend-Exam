/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Prototypes from "./pages/javascript/prototypes/Prototypes";
import JavaScript from "./pages/javascript/JavaScript";
import HigherOrderFunctions from "./pages/javascript/higher-order-functions/HigherOrderFunctions";
import Packages from "./pages/javascript/packages/Packages";
import Callback from "./pages/javascript/callback/Callback";
import Async from "./pages/javascript/async/Async";
import EventBubbling from "./pages/javascript/event-bubbling/EventBubbling";
import Promises from "./pages/javascript/promises/Promises";
import Storage from "./pages/javascript/storage/Storage";
import VariableScope from "./pages/javascript/variable-scope/VariableScope";
import WindowObject from "./pages/javascript/window-object/WindowObject";
import React from "./pages/react/React";
import CodeExecutor from "./CodeExecutor";
import ComponentBasic from "./pages/react/component-basic/ComponentBasic";
import JSXExample from "./pages/react/jsx/JSXExample";
import PropState from "./pages/react/props-state/PropsState";
import ComponentLifeCycle from "./pages/react/component-lifecycle/ComponentLifecycle";
import EventHandling from "./pages/react/event-handling/EventHandling";
import ConditionalRendering from "./pages/react/conditional-rendering/ConditionalRendering";
import ListsKeys from "./pages/react/lists-keys/ListsKeys";
import Forms from "./pages/react/forms/Forms";
import LiftingStateUp from "./pages/react/lifting-state-up/LiftingStateUp";
import Other from "./pages/other/Other";
import Header from "./Header";
import Hooks from "./pages/react/hooks/Hooks";

const routes = [
  {
    name: "Home",
    path: "",
    content: <h1>Home</h1>,
  },
  {
    name: "JavaScript",
    path: "javascript",
    content: <JavaScript />,
    subroutes: [
      { path: "prototypes", content: <Prototypes /> },
      { path: "higher-order-functions", content: <HigherOrderFunctions /> },
      { path: "packages", content: <Packages /> },
      { path: "callback", content: <Callback /> },
      { path: "async", content: <Async /> },
      { path: "event-bubbling", content: <EventBubbling /> },
      { path: "promises", content: <Promises /> },
      { path: "storage", content: <Storage /> },
      { path: "variable-scope", content: <VariableScope /> },
      { path: "window-object", content: <WindowObject /> },
    ],
  },
  {
    name: "React",
    path: "react",
    content: <React />,
    subroutes: [
      { path: "component-basic", content: <ComponentBasic /> },
      { path: "jsx", content: <JSXExample /> },
      { path: "props-state", content: <PropState /> },
      { path: "component-lifecycle", content: <ComponentLifeCycle /> },
      { path: "event-handling", content: <EventHandling /> },
      { path: "conditional-rendering", content: <ConditionalRendering /> },
      { path: "lists-keys", content: <ListsKeys /> },
      { path: "forms", content: <Forms /> },
      { path: "hooks", content: <Hooks /> },
      { path: "error-handling", content: <React /> }, // TODO: Not implemented yet
      { path: "lifting-state-up", content: <LiftingStateUp /> },
    ],
  },
  {
    name: "Other",
    path: "other",
    content: <Other />,
    subroutes: [
      { path: "router/basics", content: <React /> },
      { path: "router/navigation", content: <React /> },
      { path: "router/sub-routes", content: <React /> },
      { path: "security/jwt", content: <React /> },
      { path: "security/cors", content: <React /> },
      { path: "styling/flexbox-grid", content: <React /> },
      { path: "styling/media-queries", content: <React /> },
      { path: "styling/design-principles", content: <React /> },
      { path: "deployment/docker", content: <React /> }, // TODO: Måske kun 1 til deployment?
      { path: "deployment/domain", content: <React /> },
      { path: "deployment/https", content: <React /> },
    ],
  },
];

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <header>
          <Header routes={routes} />
        </header>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.content}>
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
    </div>
  );
}

export default App;
