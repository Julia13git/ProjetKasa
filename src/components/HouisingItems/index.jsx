import React from "react"
import { housingList } from "../../datas/housingList"
import '../../styles/scss/housingitem.scss'
import Tag from "../Tag"

function HousingItems({id}){
       return (
        <>
        {housingList.filter(housing => housing.id === id).map((housing) => {
            return (
                <>
                <div key={id} className="housing-info">
                    <h1  className="housing-title">{housing.title}</h1>
                    <p className="housing-location">{housing.location}</p>
                </div>
                    <Tag tag={housing.tags} />
                </>
        )
        })
}
</>
)
}

export default HousingItems