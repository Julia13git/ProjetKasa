import './banner.scss'
import React from 'react'

function Banner({image, title}){
    return (    
    <div className='banner'>
        <div className='banner-img'>
            <img src={image} alt='Banner' />
        </div>
        <div className='banner-cover'>
        </div>
        <div className='banner-text'>
            <h1 className='banner-title'>{title}</h1>
        </div>
        
    </div>
    )
}
export default Banner