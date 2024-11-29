import React from 'react'
import { useState } from "react"; // hooks(funcion)  de React



/*
**Quan la usuario escriu al input del nom:
    -Recullir lo valor del input
    -filtrar al objecte lo nom i si concideix amb el meu inoput
    -pintar la llista al html

*/

import "../scss/layout/FiltroNombre.scss";

function FiltroNombre({onChangeName}) {
  
    const handleChange = (ev) => {
        
       onChangeName(ev.target.value)
       
    }
  return (
    
        <label htmlFor="name" className='filtro-label'>
            <input id="id" type="text" placeholder='Nombre personaje...' onChange={handleChange}/>
        </label>
   
  )
}

export default FiltroNombre