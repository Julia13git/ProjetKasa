import '../../styles/scss/collapse.scss'

const collapseTypes = [
    {
        title: "Fiabilité",
        content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
        title: "Respect",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        title: "Service",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        title: "Sécurité",
        content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    }
]

function Collapse() {
    return (
        <div className='collapse-list'>
        {collapseTypes.map ((collapse) => (
            <div className='one-collapse'>
                <button type="button" className="collapse-btn" >
                    {collapse.title} 
                    <img src="/images/arrow-collapse.svg" alt="" />
                </button>
            <div className="collapse-content">
                <p>{collapse.content}</p>
            </div>
            </div>
            ))}
            </div>
            )
        }

export default Collapse;