/* eslint-disable react/prop-types */
import "./flexboxgrid.css";

function FlexboxGridItem({ number }) {
  return (
    <div className="flexbox-grid-item">
      <h3>Flexbox Grid - Item {number}</h3>
    </div>
  );
}

export default FlexboxGridItem;
