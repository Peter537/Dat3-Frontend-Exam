/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import QuestionElement from "../../../components/question-element/QuestionElement";
import KeyPoints from "../../../components/key-points/KeyPoints";

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
      <QuestionElement
        questions={[
          "1. Explain the concept of promises in JavaScript. How do they differ from callbacks?",
        ]}
      />
      <KeyPoints
        keypoints={[
          "Promise objekt: pending/fulfilled/rejected",
          "Chaines: .then() .catch()",
          "Errorhandling: .catch()",
        ]}
      />
      <p>{result}</p>
    </div>
  );
}

export default Promises;
