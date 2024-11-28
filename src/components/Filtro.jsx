import React from 'react'
import FiltroNombre from './FiltroNombre'
import FiltroEspecie from './FiltroEspecie'

function Filtro({onChangeName}) {
  return (
   <form>
        <FiltroNombre onChangeName={onChangeName}/>
        <FiltroEspecie />

   </form>
  )
}

export default Filtro