import React from "react";
import Card from "./Card";
import HousingItems from "./HousingItems";

function Housing({ src, alt, mode, id }) {
  if (mode === "card") {
    return <Card src={src} alt={alt} />;
  } else if (mode === "full") {
    return <HousingItems id={id} />;
  }
}
export default Housing;
