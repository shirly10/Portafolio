import { useRef, useState } from "react";
import ProyectoCard from "../Components/ProyectoCard";
import { datos } from "../../datos";
import "../Styles/Formacion.css"; 

function Proyectos() {
    const [view, setView] = useState(0);
    const refMove = useRef();
    
    const listaProyectos = datos.proyectos.lista;
    
    const leftHandler = () => {
        if (view % listaProyectos.length === 0 || view === 0) {
        const moverMas = view + listaProyectos.length;
        refMove.current.style.left = `${moverMas * -12}rem`;
    }
    setView(view + 1);
};

const rightHandler = () => {
    if (view % listaProyectos.length === 0) {
        refMove.current.style.left = `${view * -12}rem`;
    }
    setView(view - 1);
};

return (
    <section className="Training">
        <h2>Proyectos</h2>
        <div className="slider-container">
        <div
        className="move-container"
        ref={refMove}
        style={{
            transform: `translateX(${view * 12}rem)`,
            width: `${(listaProyectos.length + 3) * 12}rem`,
            left: "0rem"
        }}
        >
        {listaProyectos.map((proy, index) => (
            <ProyectoCard
            titulo={proy.titulo}
            descripcion={proy.descripcion}
            imagen={proy.imagen}
            enlace={proy.enlace}
            key={index}
            />
        ))}
        {listaProyectos.map((proy, index) => {
            if (index < 3)
                return (
                <ProyectoCard
                titulo={proy.titulo}
                descripcion={proy.descripcion}
                imagen={proy.imagen}
                enlace={proy.enlace}
                key={`extra-${index}`}
                />
            );
        })}
        </div>
    </div>
    <div className="btn-container">
        <button style={{ transform: "scaleX(-1)" }} onClick={leftHandler}>
        &#10148;
        </button>
        <button onClick={rightHandler}>&#10148;</button>
    </div>
    </section>
    );
}

export default Proyectos;
