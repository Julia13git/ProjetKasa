import React from 'react'
import  { housingList } from '../../datas/housingList'
import { Link } from 'react-router-dom'
import '../../styles/scss/card.scss'
import Card from '../Card'

function Cardlist() {
    return (
      <div className='card-list'>
        {housingList.map((housing) => (
          <Link  to={`/housing/${housing.id}`} key={housing.id}  className='onecard'>
            <Card src={housing.cover} alt={housing.title}/> 
          </Link> 
        ))}
      </div>
    )
  }
  
  export default Cardlist