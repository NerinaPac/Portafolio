import { useState, useEffect } from "react";
import "./Ball.css"

function Ball (){

    const [posicion, setPosicion] = useState({ x: 0, y: 0 });

    // Función para actualizar las coordenadas del mouse
    const manejarMovimientoMouse = (e) => {
      setPosicion({
        x: e.clientX,
        y: e.clientY
      });
    };

    useEffect(() => {
        window.addEventListener("mousemove", manejarMovimientoMouse)

        return() => {
            window.removeEventListener("mousemove", manejarMovimientoMouse)

        };

    }, []);

return(
      
        <div className="Ball"
        style={{ top: `${posicion.y - 20}px`, left:`${posicion.x - 20}px` }}>
            
            <img src="../../../public/catmouse.png" alt="gatito" className="imgGatito" />

        </div>
)


}

export default Ball;