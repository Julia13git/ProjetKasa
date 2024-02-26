import { useState } from "react";
import '../../styles/scss/collapse.scss'


export default function Collapse({title,content,modeList}){

    const [collapseOpen, setCollapseOpen] = useState(true);

    function handleClick(event){
        setCollapseOpen(!collapseOpen);
        const contentid = event.target.getAttribute("contentid");
        //document.getElementById(contentid).style.display = (collapseOpen?"block":"none");
        if (collapseOpen){
            document.getElementById(contentid).classList.remove("hide-collapse-content");                         
            document.getElementById(contentid).classList.add("show-collapse-content");        
        } else {
            document.getElementById(contentid).classList.remove("show-collapse-content");
            document.getElementById(contentid).classList.add("hide-collapse-content");
        }
    }

    return (
    <div className='one-collapse' key={title}>
        <button type="button" className="collapse-btn" >
            {title} 
            <img contentid={title} src={collapseOpen?"/images/arrow-collapse-up.svg":"/images/arrow-collapse-down.svg"}
             alt=""  onClick={handleClick}/>
        </button>
        {/* if  collapseOpen { return "collapse-content"} else {"collapse-hidden"} */}
        <div className="collapse-content hide-collapse-content" id={title}>
        {modeList &&  <ul>{content.map((c) => {return (<p key={c}>{c}</p>)})}</ul>}
        {!modeList && <p>{content}</p>}
        </div>
    </div>  
    )
   
}