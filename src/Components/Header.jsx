import { useNavigate } from "react-router-dom";
import "../Styles/Header.css";
import { useContext } from "react";
import { AnimationContext } from "../contexts/AnimationContext.jsx";

function Header() {

    const navegarA = useNavigate();
    const {showHandler, hideHandler} = useContext(AnimationContext);

    const navigateHandler = (event, donde) => {
        event.preventDefault(); 
        hideHandler();
        setTimeout(() => {
            navegarA(donde);
            showHandler();
        }, 500);
    }


    return (
        <header className="Header">
            <img src="https://placehold.co/500" alt="" />
            <nav>
                <ul>
                    <li>
                        <a href="#" onClick={(e) => navigateHandler(e, "/")}>Inicio</a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => navigateHandler(e, "/sobre-mi")}>Sobre Mí</a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => navigateHandler(e, "/habilidades")}>Habilidades</a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => navigateHandler(e, "/formacion")}>Formaciones</a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => navigateHandler(e, "/proyectos")}>Proyectos</a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => navigateHandler(e, "/contacto")}>Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;