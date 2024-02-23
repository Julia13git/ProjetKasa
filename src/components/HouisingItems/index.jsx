import React from "react"
import { housingList } from "../../datas/housingList"
import '../../styles/scss/housingitem.scss'
import Tag from "../Tag"
import Rating from "../Rating"

function HousingItems({id}){
       return (
        <>
        {housingList.filter(housing => housing.id === id).map((housing, index) => {
            return (
                <div key={index}>
                    <div  className="housing-info">
                        <h1  className="housing-title">{housing.title}</h1>
                        <p className="housing-location">{housing.location}</p>                    
                    </div>
                    <div className="tag-list">
                        {housing.tags.map((tag,index) => {
                            return (<Tag key={index} tag={tag}/>)
                        })}
                    </div>
                    <div className="rating-host">
                        <div>
                            <Rating score={housing.rating}/>
                        </div>
                    </div>
                </div>
            )
        })}
        </>
)
}

export default HousingItems