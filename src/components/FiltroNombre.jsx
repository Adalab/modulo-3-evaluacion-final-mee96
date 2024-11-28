import React from 'react'
import { useState } from "react"; // hooks(funcion)  de React

function FiltroNombre() {

   /* const [character, setcharacter] = useState({
        name: "",
        photo: "",
        specie: []
    });*/
    const handleName = (ev) => {
       console.log(ev.target.value)
    }
  return (
    <form action="">
        <label htmlFor="name">
            <input id="id" type="text" placeholder='Nombre personaje...' onChange={handleName}/>
        </label>
    </form>
  )
}

export default FiltroNombre