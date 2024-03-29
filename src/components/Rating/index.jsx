import React from "react";
import "../../assets/css/Rating/rating.css";

function Rating({ score }) {
  const ranges = [1, 2, 3, 4, 5];

  return (
    <div className="rating-block">
      {ranges.map((range, index) =>
        score >= range ? (
          <div className="star-block" key={index}>
            <img className="star" src="/images/red-rating-star.svg" alt="" />
          </div>
        ) : (
          <div className="star-block" key={index}>
            <img src="/images/rating-star.svg" alt="" className="star" />
          </div>
        )
      )}
    </div>
  );
}

export default Rating;
