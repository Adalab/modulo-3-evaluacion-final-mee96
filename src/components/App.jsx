import "../scss/App.scss";
import { useState, useEffect } from "react";
import Header from "./Header";
import Listado from "./Listado";
import Filtro from "./Filtro";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import Detalles from "./Detalles";


function App() {

   const [characters, setCharacters] = useState([]);
   const [filterName, setFilterName] = useState("");

   useEffect(() => {

        fetch("https://rickandmortyapi.com/api/character")
                .then(res => res.json())
                .then((data) => {
                    setCharacters(data.results);               
                })

   }, [])
   //useeffect recive dos parametros, la funcion y un array vacio(le indica que solo se use cuando el array este vacio, si no, entrariamos en bucle infinito porqe pediria datos todo el rato)

        
   const handleFilterName = (value) => {
        setFilterName(value);
   }

   //Filtro

   const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase())
})
  


   /*Exercici 4
   --Saber si estic dins la ruta dinamica (Detalles)-->Obtindre l'ID de la url i tambe mostrar lo personatge en este ID--->pasar la info del personatge a dins la ruta Detalles
   */

   const {pathname} = useLocation();
   const routeData = matchPath("/character/:idCarachter", pathname);
   

   // si routedata es diferente de null(null ho dona cuan estas al llistat principal cuan no has seleccionat cap encara)--> obtindre l'ID
   const idCharacter = routeData !== null ? routeData.params.idCarachter : null;
   const characterID = characters.find((character) => {
        return character.id.toString() === idCharacter
   })

    return (
        <> 
        <Header />
        <main> 
                

                <Routes>

                    <Route path="/" element={
                        <>
                            <Filtro onChangeName={handleFilterName}/>
                            <Listado characters={filteredCharacters} filterName={filterName}/>
                        </>
                    }/>
                    <Route path='/character/:idCarachter' element={<Detalles characterID={characterID}/>} />
            
                </Routes>
        </main>
        </>
    )
}

export default App
