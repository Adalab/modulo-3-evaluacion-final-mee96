import "../scss/App.scss";
import { useState, useEffect } from "react";
import Header from "./Header";
import Listado from "./Listado";
import Filtro from "./Filtro";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import Detalles from "./Detalles";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(() => {
    return localStorage.getItem("filterName") || ""; 
  });

  
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);
  // useEffect recibe dos parámetros: la función que ejecuta y un array vacío.
  // El array vacío asegura que el fetch solo se ejecute al montar el componente, evitando un bucle infinito.

  // Guardar el filtro en Local Storage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("filterName", filterName);
  }, [filterName]);

  
  const handleFilterName = (value) => {
    setFilterName(value);
  };

  
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  /* Exercici 4:
     - Saber si estoy en la ruta dinámica (Detalles).
     - Obtener el ID del personaje desde la URL.
     - Pasar la información del personaje a la ruta Detalles.
  */

  const { pathname } = useLocation(); // Obtener la ruta actual
  const routeData = matchPath("/character/:idCarachter", pathname);

  // Si routeData no es null (es decir, estamos en la página de detalles),
  // obtenemos el ID del personaje de la URL
  const idCharacter = routeData !== null ? routeData.params.idCarachter : null;
  const characterID = characters.find((character) => {
    return character.id.toString() === idCharacter;
  });

  return (
    <>
      <Header />
      <main>
        <Routes>
        
          <Route
            path="/"
            element={
              <>
                
                <Filtro onChangeName={handleFilterName} value={filterName} />
                <Listado characters={filteredCharacters} filterName={filterName} />
              </>
            }
          />
          
          <Route path="/character/:idCarachter" element={<Detalles characterID={characterID} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
