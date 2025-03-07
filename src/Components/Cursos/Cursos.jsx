import "./Cursos.css"
function Cursos ({infoCursos}){
   
    return(

        <section className="cursos">
            <h2>Cursos Realizados</h2>

            <div className="cuadroCursos">
                {infoCursos.map((item, index) => (
                    <div key={index}  className="bloqueCurso">
                    <div className="imgCurso">
                        <img src={item.imagen} alt={item.institucion} />
                    </div>
                    <h3>{item.nombre}</h3>
                    <p>{item.detalle}</p>
                </div>


                ))}
                
                
            </div>

        </section>
    )
}

export default Cursos;