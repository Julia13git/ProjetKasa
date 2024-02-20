import { housingList } from '../../datas/housingList'
//import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import '../../styles/scss/card.scss'

function Cardlist() {
    return (
      <div className='card-list'>
        {housingList.map((housing) => (
          // <Card
          //   key={housing.id}
          //   img={housing.cover}
          //   title={housing.title}
          // />
          <Link to={''} key={housing.id} className="onecard" >
        <img src={housing.cover} alt={housing.title} className='card-img'/>
        <div className='one-card-content'>
          <h2>{housing.title}</h2>
        </div>
      </Link>
        ))}
      </div>
    )
  }
  
  export default Cardlist