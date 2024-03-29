import KeyPoints from "../../../../components/key-points/KeyPoints";
import QuestionElement from "../../../../components/question-element/QuestionElement";
import FlexboxGridItem from "./FlexboxGridItem";
import "./flexboxgrid.css";

function FlexboxGrid() {
  return (
    <div>
      <h2>Styling - Flexbox Grid</h2>
      <QuestionElement
        questions={[
          "4. Describe the purpose of flexbox and grid in css, and show some examples of what can be achieved by applying them",
        ]}
      />
      <KeyPoints keypoints={["Responsivt layout", "Flexbox: 1D, Grid: 2D"]} />
      <div className="flexbox-grid-container">
        <div className="flexbox-grid-grid">
          <FlexboxGridItem number={1} />
          <FlexboxGridItem number={2} />
          <FlexboxGridItem number={3} />
          <FlexboxGridItem number={4} />
          <FlexboxGridItem number={5} />
          <FlexboxGridItem number={6} />
          <FlexboxGridItem number={7} />
          <FlexboxGridItem number={8} />
          <FlexboxGridItem number={9} />
          <FlexboxGridItem number={10} />
          <FlexboxGridItem number={11} />
          <FlexboxGridItem number={12} />
        </div>
      </div>
    </div>
  );
}

export default FlexboxGrid;
