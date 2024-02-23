import React from "react"
import { housingList } from "../../datas/housingList"
import '../../styles/scss/housingitem.scss'
import Tag from "../Tag"

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
                    <div>
                        {housing.tags.map((tag,index) => {
                            return (<Tag key={index} tag={tag}/>)
                        })}
                    </div>
                </div>
            )
        })}
         {/* <Tag key={''}tag={housing.tags} /> */}
        </>
)
}

export default HousingItems