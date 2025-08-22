import "../Styles/Habilidades.css";
import { datos } from "../../datos.js";

function Habilidades() {
    return (
        <section className="habilidades">
            <div className="wrapper">
                <h2 className="habilidadesTitle">Habilidades</h2>
                <div className="tecnologias">
                    {datos.skills.habilidades.map((skill, index) => {
                        return(
                            <div className="habilidades-container" key={skill.nombre}>
                                <img src={skill.icono} alt={skill.nombre} />
                                <span>{skill.nombre}</span>
                            </div>
                        )
                })}
            </div>
            </div>
        </section>
        );





















    // return (
    //     <section className="habilidades">
    //         <h2 className="habilidadesTitle">Habilidades</h2>
    //         <div className="habilidadesGrid">
    //             {skills.map((skill, index) => (
    //                 <div className="habilidadesItem" key={index}>
    //                     <div className="habilidadesIcon">
    //                         <img src={skill.icon} alt={skill.name} />
    //                     </div>
    //                     <span style={{fontWeight: "bold"}}>{skill.name}</span>
    //                 </div>
    //             ))}
    //         </div>
    //     </section>
    // );
}

export default Habilidades;
