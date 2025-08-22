import "../Styles/ProyectoCard.css"

function ProyectoCard({ titulo, descripcion, imagen, deploy, codigo }) {
    return (
    <div className="ProjectCard">
        <img src={imagen} alt={titulo} />
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <div className="btn-separador">
            <button type="button">
                <a href={deploy}>DEMO</a>
            </button>
            <button type="button">
                <a href={codigo}>REPO</a>
            </button>
        </div>
    </div>
    );
}

export default ProyectoCard;
