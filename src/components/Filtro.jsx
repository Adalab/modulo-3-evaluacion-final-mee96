import React from 'react';
import FiltroNombre from './FiltroNombre';

function Filtro({ onChangeName, value }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita recargar la página
  };

  return (
    <form onSubmit={handleSubmit}>
      <FiltroNombre onChangeName={onChangeName} value={value} />
    </form>
  );
}

export default Filtro;