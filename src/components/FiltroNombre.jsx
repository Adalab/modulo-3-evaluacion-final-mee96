import React from 'react'
import { useState } from "react"; // hooks(funcion)  de React



/*
**Quan la usuario escriu al input del nom:
    -Recullir lo valor del input
    -filtrar al objecte lo nom i si concideix amb el meu inoput
    -pintar la llista al html

*/

import "../scss/layout/FiltroNombre.scss";

function FiltroNombre({ onChangeName, value }) {
  const handleChange = (ev) => {
    onChangeName(ev.target.value); // Llama a la función pasada como prop con el valor actual del input
  };

  return (
    <label htmlFor="name" className="filtro-label">
      <input
        id="id"
        type="text"
        placeholder="Nombre personaje..."
        value={value} // Asegura que el input refleje el valor actual del filtro
        onChange={handleChange} // Maneja los cambios en el campo de texto
      />
    </label>
  );
}

export default FiltroNombre;