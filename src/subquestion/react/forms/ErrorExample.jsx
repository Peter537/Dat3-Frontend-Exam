/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

function ErrorExample() {
  useEffect(() => {
    tryCatchErrorHandling();
    console.log("ifElse: " + ifElseErrorHandling(5));

    // Example of handling promise.catch
    someAsyncFunction()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("Error caught in promise.catch");
        console.log(error);
      });
  }, []);

  function ifElseErrorHandling(num) {
    // this would be ternary operator if it was in the JSX
    if (num < 10) {
      return "Number is too small";
    }

    // Do something where numbers under 10 would throw an error
    return throwIfLessThan10(num);
  }

  function tryCatchErrorHandling() {
    try {
      console.log(throwIfLessThan10(5));
    } catch (error) {
      console.log("Error caught");
      console.log(error);
    }
  }

  function throwIfLessThan10(num) {
    if (num < 10) {
      throw new Error("Number is too small");
    }

    // Do something where numbers under 10 would throw an error
    return num + " is greater than or equal to 10";
  }

  function someAsyncFunction() {
    return new Promise((resolve, reject) => {
      // Simulating an async operation
      setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue < 0.5) {
          resolve("Async operation succeeded");
        } else {
          reject(new Error("Async operation failed"));
        }
      }, 1000);
    });
  }

  return (
    <div>
      <div>hey</div>
    </div>
  );
}

export default ErrorExample;
