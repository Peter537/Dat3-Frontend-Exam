/* eslint-disable react/prop-types */
import { useState } from "react";
import "./examples.css";

function Examples({ examples }) {
  const [showExamples, setShowExamples] = useState(false);

  return (
    <div
      onClick={() => setShowExamples(!showExamples)}
      className="examples-container"
    >
      <h3>Examples</h3>
      {showExamples ? (
        <ul>
          {examples?.map((example, index) => (
            <li key={index}>
              {example.type === "link" ? (
                <a href={example.content} target="_blank" rel="noreferrer">
                  {example.content}
                </a>
              ) : (
                example.content
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div>Click to show examples</div>
      )}
    </div>
  );
}

export default Examples;
