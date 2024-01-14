import KeyPoints from "../../../../components/key-points/KeyPoints";
import QuestionElement from "../../../../components/question-element/QuestionElement";
import "./responsivedesign.css";

function ResponsiveDesign() {
  return (
    <div>
      <h2>Styling - Responsive Design</h2>
      <QuestionElement
        questions={["4. Show a few examples of responsive design"]}
      />
      <KeyPoints keypoints={["Media Queries", "Flexbox og Grid"]} />
      <div className="responsive-container">
        <div className="responsive-text-1">Hello World</div>
        <div className="responsive-text-2">Hello World</div>
        <div className="responsive-text-3">Hello World</div>
        <div className="responsive-blocks">
          <div className="responsive-block">Block 1</div>
          <div className="responsive-block">Block 2</div>
          <div className="responsive-block">Block 3</div>
          <div className="responsive-block">Block 4</div>
          <div className="responsive-block">Block 5</div>
          <div className="responsive-block">Block 6</div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveDesign;
