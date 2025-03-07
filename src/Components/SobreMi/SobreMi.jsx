import "./SobreMi.css"
function SobreMi ({infoSobreMi}) {

    return(
        <section className="contSobreMi">
            <div className="textSobreMi">
                <h1>{infoSobreMi.saludo}</h1>
                <p>{infoSobreMi.presentacion}</p>
            </div>
            <img className="imgSobreMi"   src={infoSobreMi.imagen} alt={infoSobreMi.descripcionImagen} />
           
        </section>
    )
}


export default SobreMi;