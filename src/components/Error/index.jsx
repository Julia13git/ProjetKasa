import { Link } from 'react-router-dom'
import React from 'react'
import "./error.scss"

function Error () {
    return (
        <section className='error-block'>
            <span>404</span>

            <div className='oups'>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
            </div>

            <Link to="/">Retourner sur la page d’accueil</Link>
      </section>  
    )
}
export default Error