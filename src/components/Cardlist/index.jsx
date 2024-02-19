import { housingList } from '../../datas/housingList'
import Card from '../../components/Card'

function Cardlist() {
    return (
      <div className='card-list'>
        {housingList.map((housing) => (
          <Card
            key={housing.id}
            title={housing.title}
          />
        ))}
      </div>
    )
  }
  
  export default Cardlist