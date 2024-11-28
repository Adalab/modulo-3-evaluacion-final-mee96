import React from 'react';
import FiltroNombre from './FiltroNombre';

function Filtro({ onChangeName }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FiltroNombre onChangeName={onChangeName} />
    </form>
  );
}

export default Filtro;