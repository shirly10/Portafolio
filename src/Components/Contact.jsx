import { Link, useNavigate } from "react-router-dom"


function Contact() {

    const navegador = useNavigate();

    const handler = () => {
        navegador("/");
        console.log("Viajando");
    }


    return (
        <div>
            <h2>Contact</h2>
            <Link to="/about">Sobre mí</Link>
            <img src="https://placehold.co/200" onClick={handler} />
        </div> 
    )
}

export default Contact