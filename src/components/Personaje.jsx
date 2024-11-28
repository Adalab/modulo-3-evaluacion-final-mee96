import React from 'react'
import "../scss/layout/Personaje.scss";
import "../scss/core/_variables.scss";


function Personaje({personajeData}) {
  return (
        <li className='tarjeta'>
                        
            <img className='photo' src={personajeData.image} alt="imagen cada personaje" />
            <div className='texto'> 
            <h3>{personajeData.name}</h3>
            <p>{personajeData.species}</p>
            </div>
        </li>
  )
}

export default Personaje