/*import React from 'react'
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
*/

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
        <ul className="personaje">
          {characters.map((data) => (
            <li key={data.id}>
          
              <img src={data.image} alt={data.name} />
              <h3>{data.name}</h3>
              <p>{data.species}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Listado;