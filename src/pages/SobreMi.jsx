import "../Styles/SobreMi.css";
import { datos } from "../../datos.js";

function SobreMi() {
    return (
        <section className="About">
            <h2>Sobre Mí</h2>
            <div className="separador">
                    <img src={datos.about.foto} alt="Mi foto" />
                    <div className="text">
                        <strong>{datos.home.nombre}</strong>
                        {datos.about.parrafos.map((p,index) => {
                            return <p key={index}>{p}</p>
                        })}
                </div>
            </div>
        </section>
    );
}

export default SobreMi;

