import FlexboxGridItem from "./FlexboxGridItem";
import "./flexboxgrid.css";

function FlexboxGrid() {
  return (
    <div>
      <h2>Styling - Flexbox Grid</h2>
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
