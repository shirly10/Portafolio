import SocialItem from "../Components/SocialItem.jsx";
import github from "/Icons/github.svg"
import instagram from "/Icons/instagram.svg"
import linkedin from "/Icons/linkedin.svg"
import "../Styles/Home.css";
import { datos } from "../../datos.js";

function Home() {
    return (
        <section className="Home">
            <div className="card">
                <div className="info">
                    <div className="text">
                        <span>{datos.home.saludo}</span>
                        <h2>{datos.home.nombre}</h2>
                        <span className="desc">{datos.home.profesion}</span>
                        <p>{datos.home.resumen}</p>
                        <div className="btn-separador">
                            <button type="button">Descargar HDV</button>
                            <button type="button">Contacto</button>
                        </div>
                    </div>
                    <div className="image">
                        <img src={datos.home.foto} alt="Profile" />
                    </div>
                </div>
                <div className="Social">
                    <ul>
                        {datos.home.redes.map((red, index) => {
                            return <SocialItem href={red.enlace} src={red.icono} alt={red.nombre} key={index} />
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Home