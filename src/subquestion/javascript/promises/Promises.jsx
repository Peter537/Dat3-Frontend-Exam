/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

function Promises() {
  const [result, setResult] = useState("");

  useEffect(() => {
    let promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("Hello Promise!");
        // reject("Error");
      }, 1000);
    });

    promise
      .then((result) => {
        setResult(result);
      })
      .catch((error) => {
        setResult(error);
      });
  }, []);

  return (
    <div>
      <h2>JavaScript - Promises</h2>
      <p>{result}</p>
    </div>
  );
}

export default Promises;
