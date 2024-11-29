/*Exercici 4:

Quan fem clic en una targeta, apareixerà a pantalla completa amb més detalls sobre el personatge.
*/


import Portal from '/images/adventure-time-portal.gif';
import { Link } from "react-router-dom"; // Importar Link
import "../scss/layout/Detalles.scss";

function Detalles({ characterID }) {
  console.log(characterID);

  return (
    <section className="details">

      <div>
        <img className="portal" src={Portal} alt="Gif del Portal" />
      </div>

      {characterID ? (
        <div>
          <img src={characterID.image} alt={`Foto de ${characterID.name}`} />
          <h3>{characterID.name} - {characterID.species}</h3>
          <p>Current status: {characterID.status}</p>
          <p>Born in: {characterID.origin.name}</p>
          <p>Appears in {characterID.episode.length} episodes</p>
           <div className="back-link">
            <Link  to="/">Volver</Link>
          </div>
        </div>
      ) : (
        <p>Personaje no encontrado.</p>
      )}

      <div>
        <img className="portal" src={Portal} alt="Gif del Portal" />
      </div>

      
     

    </section>
  );
}

export default Detalles;



