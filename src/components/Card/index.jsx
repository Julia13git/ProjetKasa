import PropTypes from 'prop-types'
import '../../styles/scss/card.scss'
import { Link } from 'react-router-dom'

function Card({id,  title }) {
  return (
      <Link to={''} key={id} className="onecard" >
        <div className='one-card-content'>
          <h2>{title} </h2>
        </div>
      </Link>
  )
}
Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Card