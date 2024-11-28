import "../scss/App.scss";
import { useState, useEffect } from "react";
import Header from "./Header";
import FiltroNombre from "./FiltroNombre";
import Listado from "./Listado";



function App() {

   const [characters, setCharacters] = useState([]);

   useEffect(() => {

        fetch("https://rickandmortyapi.com/api/character")
                .then(res => res.json())
                .then((data) => {
                    setCharacters(data.results);               
                })

   }, [])
   //useeffect recive dos parametros, la funcion y un array vacio(le indica que solo se use cuando el array este vacio, si no, entrariamos en bucle infinito porqe pediria datos todo el rato)

        
   

    return (
        <> 
        <Header />
        <FiltroNombre />
        <Listado characters={characters}/>
        
        </>
    )
}

export default App
