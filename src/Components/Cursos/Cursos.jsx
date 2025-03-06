import "./Cursos.css"
function Cursos ({infoCursos}){
   
    return(

        <section className="cursos">
            <h2>Cursos Realizados</h2>

            <div className="cuadroCursos">
                {infoCursos.map((item, index) => (
                    <div key={index}  className="bloqueCurso">
                    <img src={item.imagen} alt={item.institucion} />
                    <h3>{item.nombre}</h3>
                    <p>{item.detalle}</p>
                </div>


                ))}
                
                
            </div>

        </section>
    )
}

export default Cursos;