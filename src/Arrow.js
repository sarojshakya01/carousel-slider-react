import React from "react";

const Arrow = ({ direction, click, glyph }) => (
  <div className={`slide-arrow ${direction}`} onClick={click}>
    {glyph}
  </div>
);

export default Arrow;
