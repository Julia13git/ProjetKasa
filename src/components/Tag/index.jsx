import React from "react"
import '../../styles/scss/housingitem.scss'


function Tag({tag}){
    return (
    
        <div>
             <span className="tagstyle">{tag}</span>
        </div>
    )
}
export default Tag