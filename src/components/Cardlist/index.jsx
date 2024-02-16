import { housingList } from '../../datas/housingList'
import Card from '../../components/Card'

function Cardlist() {
    return (
      <div className='card-list'>
        {housingList.map((housing, index) => (
          <Card
            key={`${housing.id}-${index}`}
            title={housing.title}
          />
        ))}
      </div>
    )
  }
  
  export default Cardlist