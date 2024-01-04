/* eslint-disable no-unused-vars */
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
import CodeExecutor from "./CodeExecutor";
import ComponentBasic from "./react/component-basic/ComponentBasic";
import JSXExample from "./react/jsx/JSXExample";
import PropState from "./react/props-state/PropsState";
import ComponentLifeCycle from "./react/component-lifecycle/ComponentLifecycle";
import EventHandling from "./react/event-handling/EventHandling";
import ConditionalRendering from "./react/conditional-rendering/ConditionalRendering";
import ListsKeys from "./react/lists-keys/ListsKeys";
import Forms from "./react/forms/Forms";
import Hooks from "./react/Hooks/Hooks";
import LiftingStateUp from "./react/lifting-state-up/LiftingStateUp";
import Other from "./other/Other";

const routes = [
  {
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
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.content}>
              {route.subroutes.map((subroute, index) => (
                <Route
                  key={index}
                  path={subroute.path}
                  element={subroute.content}
                />
              ))}
            </Route>
          ))}
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
