import React from 'react'
import Personaje from './Personaje'
import "../scss/layout/Listado.scss";

function Listado({characters}) {
  return (
    <section>
        <ul className='personaje'> 
        {
            characters.map((data) => {
                return(
                   <Personaje key={data.id} personajeData={data}/>
                        //map demana una key cuan pintes al HTML solament
                )
            })
        }
        </ul>
    </section>
  )
}

export default Listado