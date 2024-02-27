import React from "react"
import './tag.scss'


function Tag({tag}){
    return (
        <div>
             <button className="tagstyle">{tag}</button>
        </div>
    )
}
export default Tag