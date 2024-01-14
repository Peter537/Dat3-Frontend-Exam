/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import QuestionElement from "../../../components/question-element/QuestionElement";
import Examples from "../../../components/examples/Examples";

function Async() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchCountry("dk")
      .then((data) => {
        setCountry(data[0].name.common);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function fetchCountry(code) {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  return (
    <div>
      <h2>JavaScript - Async</h2>
      <QuestionElement
        questions={[
          "1. What is the difference between synchronous and asynchronous programming and how does async and await fit into this?",
        ]}
      />
      <p>{country}</p>
      <Examples
        examples={[
          {
            type: "link",
            content:
              "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing",
          },
        ]}
      />
    </div>
  );
}

export default Async;
