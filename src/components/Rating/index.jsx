import React from "react"
import '../../styles/scss/housingitem.scss'

function Rating({score}){
    const ranges = [1, 2, 3, 4, 5]

    return (
        <div className="rating-block">
            {ranges.map((range) => score >= range ? (
                <div className="star-block">
                    <img 
                    key={range.toString()}
                    className="star"
                    src="/images/red-rating-star.svg"
                    alt=""
                />
              </div>
            ) : (
                <div className="star-block">
                    <img src='/images/rating-star.svg' alt="" className="star"/>
                </div>
            )
            )}
        </div>
    )
}
export default Rating