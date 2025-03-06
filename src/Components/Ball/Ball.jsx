import { useState, useEffect } from "react";
import "./Ball.css"

function Ball (){

    const [posicion, setPosicion] = useState({ x: 0, y: 0 });

    // Función para actualizar las coordenadas del mouse
    const manejarMovimientoMouse = (e) => {
      setPosicion({
        x: e.clientX, // Coordenada X del mouse
        y: e.clientY, // Coordenada Y del mouse
      });
    };

    useEffect(() => {
        window.addEventListener("mousemove", manejarMovimientoMouse)

        return() => {
            window.removeEventListener("mousemove", manejarMovimientoMouse)

        };

    }, []);



console.log(posicion)

return(
       //deberia estar en el contenedor para que no deje de moverse.
        <div className="Ball"
        style={{
            backgroundColor:"black",
            top: `${posicion.y - 20}px`,
            left:`${posicion.x - 20}px`,
            position:"absolute"
        }}>

        </div>
)


}

export default Ball;