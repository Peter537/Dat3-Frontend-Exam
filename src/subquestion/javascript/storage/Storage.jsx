import { useState } from "react";

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
      <h3>Local Storage</h3>
      <p>
        local storage er gemt på computeren, kan bruges over flere sessioner
        samtidig
      </p>
      <button onClick={setLocalName}>Set Local Storage</button>
      <button onClick={removeLocalStorage}>Remove Local Storage</button>
      <p>{localStorageName}</p>
      <h3>Session Storage</h3>
      <p>
        session storage er gemt i sessionen, og clearet når browseren/tabben er
        lukket
      </p>
      <button onClick={setSessionName}>Set Session Storage</button>
      <button onClick={removeSessionStorage}>Remove Session Storage</button>
      <p>{sessionStorageName}</p>
    </div>
  );
}

export default Storage;
