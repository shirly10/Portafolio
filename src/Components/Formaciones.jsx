import "../Styles/Formaciones.css";

function Formaciones({institucion, titulo, fecha, foto}) {
    return (
        <div className="TrainCard">
            <img src={foto} alt="" />
            <strong>{titulo}</strong>
            <p>
                <span>{institucion} </span>
                <span> {fecha}</span>
            </p>
        </div>
    )
}

export default Formaciones;