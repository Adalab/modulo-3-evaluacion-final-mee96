import React from 'react'
import "../scss/layout/Personaje.scss";

function Personaje({personajeData}) {
  return (
        <li >
                        
            <img className='photo' src={personajeData.image} alt="imagen cada personaje" />
            <h3>{personajeData.name}</h3>
            <p>{personajeData.species}</p>
        </li>
  )
}

export default Personaje