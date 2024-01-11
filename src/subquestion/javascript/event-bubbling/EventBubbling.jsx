import { useState } from "react";
import "./eventbubbling.css";
import eventBubbling from "./event-bubbling.png";
import QuestionElement from "../../../components/question-element/QuestionElement";

function EventBubbling() {
  const [count, setCount] = useState(0);

  function handleClickDiv() {
    console.log("div clicked");
  }

  function handleClickSpan() {
    console.log("span clicked");
  }

  function handleClickButton() {
    console.log("button clicked");
    setCount(count + 1);
  }

  function handleClickDiv2(event) {
    event.stopPropagation();
    console.log("div clicked 2");
  }

  function handleClickSpan2(event) {
    event.stopPropagation();
    console.log("span clicked 2");
  }

  function handleClickButton2(event) {
    event.stopPropagation();
    console.log("button clicked 2");
    setCount(count + 1);
  }

  return (
    <div>
      <h2>JavaScript - Event Bubbling</h2>
      <QuestionElement
        questions={["1. Explain the concept of event bubbling in JavaScript."]}
      />
      <img className="eventbubbling-img" src={eventBubbling} />
      <div>
        Billede af:
        <a href="https://www.freecodecamp.org/news/event-bubbling-in-javascript/">
          FreeCodeCamp.org
        </a>
      </div>
      <div>Count: {count}</div>
      <div onClick={handleClickDiv} className="eventbubbling-div">
        <span onClick={handleClickSpan} className="eventbubbling-span">
          <button onClick={handleClickButton}>Click me</button>
        </span>
      </div>
      <h3>Stop Propagation</h3>
      <div onClick={handleClickDiv2} className="eventbubbling-div">
        <span onClick={handleClickSpan2} className="eventbubbling-span">
          <button onClick={handleClickButton2}>Click me</button>
        </span>
      </div>
    </div>
  );
}

export default EventBubbling;
