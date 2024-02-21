import '../../styles/scss/card.scss'
import { Link } from 'react-router-dom'

function Card({id, title, cover }) {
  return (
      <Link to={''} key={id} className="onecard" >
        <img src={cover} alt={title} />
        <div className='one-card-content'>
          <h2>{title}</h2>
        </div>
      </Link>
  )
}

export default Card