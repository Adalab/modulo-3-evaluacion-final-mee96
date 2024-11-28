/*Exercici 4:

Quan fem clic en una targeta, apareixerà a pantalla completa amb més detalls sobre el personatge.
*/


import Portal from '/images/adventure-time-portal.gif'


function Detalles() {
  return (
    <section className='details'>

        <div> 
            <img className='portal' src={Portal} alt="Gif del Portal" />
        </div>

        <div> 
            <img src="" alt="" />
            <h3>Nombre</h3>
            <p>Status</p>
            <p>especie</p>
            <p>Origen</p>
            <P>Episodios</P>
        </div>

    </section>
  )
}

export default Detalles



