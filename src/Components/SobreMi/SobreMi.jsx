import "./SobreMi.css"
function SobreMi ({infoSobreMi}) {

    return(
        <section className="contSobreMi">
            <div className="textSobreMi">
                <h1 className="sigmar-regular">{infoSobreMi.saludo}</h1>
               
            </div>
            <img className="imgSobreMi"   src={infoSobreMi.imagen} alt={infoSobreMi.descripcionImagen} />
           
        </section>
    )
}


export default SobreMi;