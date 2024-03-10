import React from "react";
import Card from "./Card";
import HousingItems from "./HousingItems";

function Housing({ housing, mode }) {
  if (mode === "card") {
    return <Card housing={housing} />;
  } else if (mode === "full") {
    return <HousingItems housing={housing} />;
  }
}
export default Housing;
