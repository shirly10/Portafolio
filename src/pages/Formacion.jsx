import { useRef, useState } from "react";
import Formaciones from "../Components/Formaciones.jsx";
import { datos } from "../../datos.js";
import "../Styles/Formacion.css";

function Formacion() {

    const [view, setView] = useState(0);
    const refMove = useRef();

    const leftHandler = () => {
        if(view % datos.formaciones.formacion.length == 0 || view == 0) {
            const moverMas = view + datos.formaciones.formacion.length;
            refMove.current.style.left = `${moverMas * -12}rem`;
        } else {
            // ...
        }
        setView(view + 1);
    }

    const rightHandler = () => {
        // OPERADOR MODULO "%" PARA HACER EL CICLO
        if(view % datos.formaciones.formacion.length == 0) {
            refMove.current.style.left = `${view * -12}rem`;
        }
        // } else {
        //     // ...
        // }
        setView(view - 1);
    }


    return(
        <section className="Training">
            <h2>Formación</h2>
            <div className="slider-container">
                <div className="move-container" ref={refMove} style={
                    {
                        transform: `translateX(${view * 12}rem)`,
                        width: `${(datos.formaciones.formacion.length + 3) * 12}rem`,
                        left: "0rem"
                    }}>
                    {datos.formaciones.formacion.map((formacion, index) => {
                        return <Formaciones 
                            institucion={formacion.institucion}
                            titulo={formacion.titulo}
                            fecha={formacion.fecha}
                            foto={formacion.foto}
                            key={index}
                        />
                    })}
                    {datos.formaciones.formacion.map((formacion, index) => {
                        if(index < 3) return <Formaciones 
                            institucion={formacion.institucion}
                            titulo={formacion.titulo}
                            fecha={formacion.fecha}
                            foto={formacion.foto}
                            key={index}
                        />
                    })}
                </div>
            </div>
            <div className="btn-container">
                <button style={{transform: "scaleX(-1)"}} onClick={leftHandler}>
                    &#10148;
                </button>
                <button onClick={rightHandler}>
                    &#10148;
                </button>
            </div>
        </section>
    )
}

export default Formacion;