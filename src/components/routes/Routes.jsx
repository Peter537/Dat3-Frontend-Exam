import Prototypes from "./../../pages/javascript/prototypes/Prototypes";
import HigherOrderFunctions from "./../../pages/javascript/higher-order-functions/HigherOrderFunctions";
import Packages from "./../../pages/javascript/packages/Packages";
import Callback from "./../../pages/javascript/callback/Callback";
import Async from "./../../pages/javascript/async/Async";
import EventBubbling from "./../../pages/javascript/event-bubbling/EventBubbling";
import Promises from "./../../pages/javascript/promises/Promises";
import Storage from "./../../pages/javascript/storage/Storage";
import VariableScope from "./../../pages/javascript/variable-scope/VariableScope";
import WindowObject from "./../../pages/javascript/window-object/WindowObject";
import ComponentBasic from "./../../pages/react/component-basic/ComponentBasic";
import JSXExample from "./../../pages/react/jsx/JSXExample";
import PropState from "./../../pages/react/props-state/PropsState";
import ComponentLifeCycle from "./../../pages/react/component-lifecycle/ComponentLifecycle";
import EventHandling from "./../../pages/react/event-handling/EventHandling";
import ConditionalRendering from "./../../pages/react/conditional-rendering/ConditionalRendering";
import ListsKeys from "./../../pages/react/lists-keys/ListsKeys";
import Forms from "./../../pages/react/forms/Forms";
import LiftingStateUp from "./../../pages/react/lifting-state-up/LiftingStateUp";
import Hooks from "./../../pages/react/hooks/Hooks";
import ErrorHandling from "../../pages/react/error-handling/ErrorHandling";
import RouterBasics from "../../pages/other/router/basics/RouterBasics";
import RouterNavigation from "../../pages/other/router/navigation/RouterNavigation";
import RouterSubRoutes from "../../pages/other/router/subroutes/RouterSubroutes";
import FlexboxGrid from "../../pages/other/styling/flexbox-grid/FlexboxGrid";
import MediaQueries from "../../pages/other/styling/media-queries/MediaQueries";
import DesignPrinciples from "../../pages/other/styling/design-principles/DesignPrinciples";
import Docker from "../../pages/other/deployment/docker/Docker";
import Domain from "../../pages/other/deployment/domain/Domain";
import Https from "../../pages/other/deployment/https/Https";
import SecurityCORS from "../../pages/other/security/cors/SecurityCORS";
import SecurityJWT from "../../pages/other/security/jwt/SecurityJWT";

export const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "JavaScript",
    path: "/javascript",
    subroutes: [
      { path: "prototypes", content: <Prototypes />, name: "Prototypes" },
      {
        path: "higher-order-functions",
        content: <HigherOrderFunctions />,
        name: "Higher Order Functions",
      },
      { path: "packages", content: <Packages />, name: "Packages" },
      { path: "callback", content: <Callback />, name: "Callback" },
      { path: "async", content: <Async />, name: "Async" },
      {
        path: "event-bubbling",
        content: <EventBubbling />,
        name: "Event Bubbling",
      },
      { path: "promises", content: <Promises />, name: "Promises" },
      { path: "storage", content: <Storage />, name: "Storage" },
      {
        path: "variable-scope",
        content: <VariableScope />,
        name: "Variable Scope",
      },
      {
        path: "window-object",
        content: <WindowObject />,
        name: "Window Object",
      },
    ],
  },
  {
    name: "React",
    path: "/react",
    subroutes: [
      {
        path: "component-basic",
        content: <ComponentBasic />,
        name: "Component Basic",
      },
      { path: "jsx", content: <JSXExample />, name: "JSX Example" },
      { path: "props-state", content: <PropState />, name: "Props State" },
      {
        path: "component-lifecycle",
        content: <ComponentLifeCycle />,
        name: "Component Lifecycle",
      },
      {
        path: "event-handling",
        content: <EventHandling />,
        name: "Event Handling",
      },
      {
        path: "conditional-rendering",
        content: <ConditionalRendering />,
        name: "Conditional Rendering",
      },
      { path: "lists-keys", content: <ListsKeys />, name: "Lists Keys" },
      { path: "forms", content: <Forms />, name: "Forms" },
      { path: "hooks", content: <Hooks />, name: "Hooks" },
      {
        path: "error-handling",
        content: <ErrorHandling />,
        name: "Error Handling",
      },
      {
        path: "lifting-state-up",
        content: <LiftingStateUp />,
        name: "Lifting State Up",
      },
    ],
  },
  {
    name: "Other",
    path: "/other",
    subroutes: [
      {
        path: "router/basics",
        content: <RouterBasics />,
        name: "Router Basics",
      },
      {
        path: "router/navigation",
        content: <RouterNavigation />,
        name: "Router Navigation",
      },
      {
        path: "router/sub-routes",
        content: <RouterSubRoutes />,
        name: "Router Sub-Routes",
      },
      { path: "security/jwt", content: <SecurityJWT />, name: "Security JWT" },
      {
        path: "security/cors",
        content: <SecurityCORS />,
        name: "Security CORS",
      },
      {
        path: "styling/flexbox-grid",
        content: <FlexboxGrid />,
        name: "Styling Flexbox Grid",
      },
      {
        path: "styling/media-queries",
        content: <MediaQueries />,
        name: "Styling Media Queries",
      },
      {
        path: "styling/design-principles",
        content: <DesignPrinciples />,
        name: "Styling Design Principles",
      },
      {
        path: "deployment/docker",
        content: <Docker />,
        name: "Deployment Docker",
      }, // TODO: Maybe only one for deployment?
      {
        path: "deployment/domain",
        content: <Domain />,
        name: "Deployment Domain",
      },
      {
        path: "deployment/https",
        content: <Https />,
        name: "Deployment HTTPS",
      },
    ],
  },
];
