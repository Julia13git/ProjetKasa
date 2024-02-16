import PropTypes from 'prop-types'
import '../../styles/scss/card.scss'

function Card({ id, title }) {
  return (
      <div className="onecard">
        <div className='one-card-content'>
          <h2>{title}</h2>
        </div>
      </div>
  )
}
Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Card