import React from 'react'
import "../scss/layout/Personaje.scss";
import "../scss/core/_variables.scss";
import { Link } from "react-router-dom";


function Personaje({personajeData}) {
  return (
        <li className='tarjeta'>

           <Link to={`/character/${personajeData.id}`} >             
              <img className='photo' src={personajeData.image} alt="imagen cada   personaje" />
              <div className='texto'> 
                <h3>{personajeData.name}</h3>
                <p>{personajeData.species}</p>
              </div>
            </Link> 
        </li>
  )
}

export default Personaje