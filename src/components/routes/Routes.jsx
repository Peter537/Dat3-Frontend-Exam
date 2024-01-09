import HigherOrderFunctions from "../../subquestion/javascript/higher-order-functions/HigherOrderFunctions";
import Packages from "../../subquestion/javascript/packages/Packages";
import Callback from "../../subquestion/javascript/callback/Callback";
import Async from "../../subquestion/javascript/async/Async";
import EventBubbling from "../../subquestion/javascript/event-bubbling/EventBubbling";
import Promises from "../../subquestion/javascript/promises/Promises";
import Storage from "../../subquestion/javascript/storage/Storage";
import VariableScope from "../../subquestion/javascript/variable-scope/VariableScope";
import WindowObject from "../../subquestion/javascript/window-object/WindowObject";
import ComponentBasic from "../../subquestion/react/component-basic/ComponentBasic";
import JSXExample from "../../subquestion/react/jsx/JSXExample";
import PropState from "../../subquestion/react/props-state/PropsState";
import EventHandling from "../../subquestion/react/event-handling/EventHandling";
import ConditionalRendering from "../../subquestion/react/conditional-rendering/ConditionalRendering";
import ListsKeys from "../../subquestion/react/lists-keys/ListsKeys";
import Forms from "../../subquestion/react/forms/Forms";
import LiftingStateUp from "../../subquestion/react/lifting-state-up/LiftingStateUp";
import Hooks from "../../subquestion/react/hooks/Hooks";
import ErrorHandling from "../../subquestion/react/error-handling/ErrorHandling";
import RouterBasics from "../../subquestion/other/router/basics/RouterBasics";
import RouterNavigation from "../../subquestion/other/router/navigation/RouterNavigation";
import RouterSubRoutes from "../../subquestion/other/router/subroutes/RouterSubRoutes";
import FlexboxGrid from "../../subquestion/other/styling/flexbox-grid/FlexboxGrid";
import DesignPrinciples from "../../subquestion/other/styling/design-principles/DesignPrinciples";
import Docker from "../../subquestion/other/deployment/docker/Docker";
import Https from "../../subquestion/other/deployment/https/Https";
import SecurityCORS from "../../subquestion/other/security/cors/SecurityCORS";
import SecurityJWT from "../../subquestion/other/security/jwt/SecurityJWT";
import SpreadOperator from "../../subquestion/javascript/spread-operator/SpreadOperator";
import ResponsiveDesign from "../../subquestion/other/styling/responsive-design/ResponsiveDesign";
import UseEffect from "../../subquestion/react/use-effect/UseEffect";

export const questions = [
  {
    number: "1",
    javascript: <HigherOrderFunctions />,
    react: <ComponentBasic />,
    other: <RouterBasics />,
  },
  {
    number: "2",
    javascript: <Callback />,
    react: <JSXExample />,
    other: <FlexboxGrid />,
  },
  {
    number: "3",
    javascript: <Packages />,
    react: <PropState />,
    other: <Docker />,
  },
  {
    number: "4",
    javascript: <Promises />,
    react: <ErrorHandling />,
    other: <DesignPrinciples />,
  },
  {
    number: "5",
    javascript: <Async />,
    react: <ConditionalRendering />,
    other: <SecurityJWT />,
  },
  {
    number: "6",
    javascript: <Storage />,
    react: <UseEffect />,
    other: <RouterNavigation />,
  },
  {
    number: "7",
    javascript: <WindowObject />,
    react: <EventHandling />,
    other: <SecurityJWT />,
  },
  {
    number: "8",
    javascript: <EventBubbling />,
    react: <ListsKeys />,
    other: <Https />,
  },
  {
    number: "9",
    javascript: <VariableScope />,
    react: <Forms />,
    other: <RouterSubRoutes />,
  },
  {
    number: "10",
    javascript: <SpreadOperator />,
    react: <Hooks />,
    other: <SecurityCORS />,
  },
  {
    number: "11",
    javascript: <Async />,
    react: <LiftingStateUp />,
    other: <ResponsiveDesign />,
  },
  {
    number: "12",
    javascript: <Promises />,
    react: <ConditionalRendering />,
    other: <FlexboxGrid />,
  },
  {
    number: "13",
    javascript: <HigherOrderFunctions />,
    react: <PropState />,
    other: <SecurityJWT />,
  },
];
