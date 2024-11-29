import React from 'react'
import Personaje from './Personaje'
import "../scss/layout/Listado.scss";

function Listado({ characters, filterName }) {
  return (
    <section >
      {characters.length === 0 ? (
        <p>
          No hay ningún personaje que coincida con "{filterName}".
        </p>
      ) : (
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
      )}
    </section>
  );
}

export default Listado;