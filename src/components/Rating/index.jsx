import React from "react"
import '../../styles/scss/housingitem.scss'

function Rating({score}){

     const ranges = [1, 2, 3, 4, 5]

    return (
        <div>
            {ranges.map((range) => 
            score >= range ? (
                <img 
                key={range.toString()}
                className="star"
                src="/images/red-rating-star.svg"
                alt="star"
              />
            ) : (
                <img src='/images/rating-star.svg' alt="" className="star"/>
            )
            )}
            {/* <img src='/images/rating-star.svg' alt="" className="star"/>
            <img src='/images/rating-star.svg' alt="" className="star"/>
            <img src='/images/rating-star.svg' alt="" className="star"/>
            <img src='/images/rating-star.svg' alt="" className="star"/>
            <img src='/images/rating-star.svg' alt="" className="star"/>  */}
            {/* <i class="fa-solid fa-star star"></i>
            <i class="fa-solid fa-star star"></i>
            <i class="fa-solid fa-star star"></i>
            <i class="fa-solid fa-star star"></i>
            <i class="fa-solid fa-star star"></i> */}
        </div>
    )
}
export default Rating