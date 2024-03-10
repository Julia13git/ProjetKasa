import React from "react";
import "../../assets/css/Tag/tag.css";

function Tag({ tag }) {
  return (
    <div>
      <button className="tagstyle">{tag}</button>
    </div>
  );
}
export default Tag;
