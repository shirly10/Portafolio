import { useParams } from "react-router-dom";

function Numero() {

    const parametros = useParams();

    return(
        <div>
            <h3>El número que colocaste es {parametros.num}</h3>
            <h3>El nombre que colocaste es {parametros.nombre}</h3>
        </div>
    )
}

export default Numero;