import React from "react"
import '../../styles/scss/housingitem.scss'


function Tag({tag}){
    return (
        <div>
             <button className="tagstyle">{tag}</button>
        </div>
    )
}
export default Tag