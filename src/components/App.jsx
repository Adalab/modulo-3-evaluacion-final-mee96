import "../scss/App.scss";
import { useState, useEffect } from "react";
import Header from "./Header";
import Listado from "./Listado";
import Filtro from "./Filtro";
import { Routes, Route } from "react-router-dom";
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
   console.log(filteredCharacters);

    return (
        <> 
        <Header />
        <main> 
                

                <Routes>

                    <Route path="/" element={
                        <>
                            <Filtro onChangeName={handleFilterName}/>
                            <Listado characters={filteredCharacters}/>
                        </>
                    }/>
                    <Route path='/character/:idCarachter' element={<Detalles />} />
            
                </Routes>
        </main>
        </>
    )
}

export default App
