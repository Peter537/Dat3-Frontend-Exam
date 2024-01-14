import { useState } from "react";
import QuestionElement from "../../../components/question-element/QuestionElement";
import KeyPoints from "../../../components/key-points/KeyPoints";

function Storage() {
  const [sessionStorageName, setSessionStorageName] = useState("");
  const [localStorageName, setLocalStorageName] = useState("");

  function setLocalName() {
    localStorage.setItem("name", "Peter");
    retrieveLocalStorage();
  }

  function retrieveLocalStorage() {
    setLocalStorageName(localStorage.getItem("name"));
  }

  function removeLocalStorage() {
    localStorage.removeItem("name");
    retrieveLocalStorage();
  }

  function setSessionName() {
    sessionStorage.setItem("name", "Peter");
    retrieveSessionStorage();
  }

  function retrieveSessionStorage() {
    setSessionStorageName(sessionStorage.getItem("name"));
  }

  function removeSessionStorage() {
    sessionStorage.removeItem("name");
    retrieveSessionStorage();
  }

  return (
    <div>
      <h2>JavaScript - Storage</h2>
      <QuestionElement
        questions={[
          "1. What is the difference between localStorage and sessionStorage in JavaScript?",
        ]}
      />
      <KeyPoints
        keypoints={[
          "local: gemt på computeren, kan bruges på flere sessions",
          "session: gemt i session, clearet når Tab'en er lukket",
        ]}
      />
      <h3>Local Storage</h3>
      <button onClick={setLocalName}>Set Local Storage</button>
      <button onClick={removeLocalStorage}>Remove Local Storage</button>
      <p>{localStorageName}</p>
      <h3>Session Storage</h3>
      <button onClick={setSessionName}>Set Session Storage</button>
      <button onClick={removeSessionStorage}>Remove Session Storage</button>
      <p>{sessionStorageName}</p>
    </div>
  );
}

export default Storage;
