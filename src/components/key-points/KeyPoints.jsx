/* eslint-disable react/prop-types */
import "./keypoints.css";

function KeyPoints({ keypoints }) {
  return (
    <div className="keypoints-container">
      <ul>
        {keypoints?.map((keypoint, index) => (
          <li key={index}>{keypoint}</li>
        ))}
      </ul>
    </div>
  );
}

export default KeyPoints;
