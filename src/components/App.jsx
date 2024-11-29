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
    // Cargar el filtro desde Local Storage al iniciar la app
    return localStorage.getItem("filterName") || ""; // Si no existe, usa una cadena vacía
  });

  // Obtener los datos de la API de Rick & Morty
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

  // Actualizar el estado del filtro
  const handleFilterName = (value) => {
    setFilterName(value);
  };

  // Filtrar personajes según el texto ingresado
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
          {/* Página principal */}
          <Route
            path="/"
            element={
              <>
                {/* Pasar el valor actual del filtro y la función para actualizarlo */}
                <Filtro onChangeName={handleFilterName} value={filterName} />
                <Listado characters={filteredCharacters} filterName={filterName} />
              </>
            }
          />
          {/* Página de detalles */}
          <Route path="/character/:idCarachter" element={<Detalles characterID={characterID} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
