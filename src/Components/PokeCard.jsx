import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import "../Styles/PokeCard.css";

function PokeCard() {

    const { id } = useParams();
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const [poke, setPoke] = useState(null);

    useEffect(() => {

        fetch("https://pokeapi.co/api/v2/pokemon/" + id)
            .then(response => {
                // if (!response.ok) throw new Error("No encontrado");
                return response.json();
            })
            .then(data => {
                setPoke(data);
                setCargando(false);
            })
            .catch(error => {

                setError(true);
                setCargando(false);
            });
    }, [id]);


    return (
        <>
            {cargando && <p>Cargando...</p>}
            {error && <p>Error: Pokémon no encontrado</p>}
            {poke &&
                <div className="pokemon-card">
                    <strong>{poke.name}</strong>
                    <img src={poke.sprites.other["official-artwork"].front_default} width={100} alt={poke.name} />
                    <p>
                        Tipo:{" "}
                        {poke.types.map((tipo, index) => (
                            <span key={tipo.type.name}>
                                {tipo.type.name}
                                {index < poke.types.length - 1 ? ", " : ""}
                            </span>
                        ))}
                    </p>
                </div>
            }
        </>
    )
}

export default PokeCard;