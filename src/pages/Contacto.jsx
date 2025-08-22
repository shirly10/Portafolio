import { useForm } from "react-hook-form";
import "../Styles/Contacto.css";

function Contacto() {

    // const enviarCorreo = (nombre, correo, asunto, mensaje) => {
    //     let url = "";
    //     url += "mailto:";
    //     url += correo;
    //     url += "?subject=";
    //     url += asunto;
    //     url += "&body=";
    //     url += mensaje;
    //     url += `Mensaje enviado por: ${nombre}`;

    //     url = url.replace(" ", "%20")

        
    //     window.location.href = url;
    // }

    const {handleSubmit, register, formState: {errors}, getValues, setValue} = useForm();

    const manejadorSubmit = handleSubmit(async (datos) => {
        console.log(datos);

        try {
            const response = await fetch("http://localhost:3000/api/send",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },    
                    body: JSON.stringify(datos)
                }
            );

            const data = await response.json();
            alert(data.message);
        } catch (error) {
            alert(error.message);
        }

        // enviarCorreo(datos.nombre, datos.correo, datos.asunto, datos.mensaje);
    });

    const filtrarLetras = (cual) => {
        let valores = "";
        valores = getValues(cual);
        setValue(cual, valores.replace(/[^a-zA-ZñÑ]/g,""));
    }

    // const filtrarNumeros = (cual) => {
    //     let valores = "";
    //     valores = getValues(cual);
    //     setValue(cual, valores.replace(/[^0-9]/g,""));
    // }

    return (
        <section className="Contacto">
            <h2>Contacto</h2>
            <p>Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.</p>
                <form className="formulario" onSubmit={manejadorSubmit}> 
                        <input type="text" 
                        style={errors.nombre && {outline: "1px solid red"}}
                        placeholder="Tu nombre"
                        className={errors.nombre ? "input-error" : ""}
                        {
                            ...register("nombre",
                                {
                                    required: {
                                        value: true,
                                        message: "Debes llenar este campo",
                                    },
                                    minLength: {
                                        value: 2,
                                        message: "Debes tener mínimo 5 caracteres",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Debes tener máximo 10 caracteres",
                                    },
                                    onChange: () => filtrarLetras("nombre"),
                                }
                            )
                        }/>
                        {/* {errors.nombre?.type == "required" && <span style={{color: "red"}}>Error: Debes llenar este campo</span>}
                        {errors.nombre?.type == "minLength" && <span style={{color: "red"}}>Error: Debe tener mínimo 5 caracteres</span>}
                        {errors.nombre?.type == "maxLength" && <span style={{color: "red"}}>Error: Debe tener máximo 10 caracteres</span>} */}

                        {errors.nombre && <span style={{color: "red"}}>Error: {errors.nombre.message}</span>}

                        <input type="email" placeholder="Tu correo" style={errors.correo && {outline: "1px solid red"}} {
                            ...register("correo", {
                                required: {
                                    value: true,
                                    message: "Debes llenar este campo"
                                },
                                validate: (valor) => {
                                    const evaluacion = (/[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(valor);
                                    if(!evaluacion) {
                                        return "El campo no puede tener 'a'"
                                    }
                                }
                            })
                        } />

                        {errors.correo && <span style={{color: "red"}}>Error: {errors.correo?.message}</span>}

                        <input type="text" placeholder="Escribe un asunto" style={errors.nombre && { outline: "1px solid red" }} {...register("asunto", {
                            required: {
                                value: true,
                                message: "Debes llenar este campo",
                            },
                            minLength: {
                                value: 2,
                                message: "Debes tener mínimo 2 caracteres",
                            },
                            maxLength: {
                                value: 40,
                                message: "Debes tener máximo 40 caracteres",
                            },
                        })} />

                        {errors.asunto && <span style={{color: "red"}}>Error: {errors.asunto?.message}</span>}
                        
                        <textarea placeholder="Tu mensaje" style={errors.mensaje && { outline: "1px solid red"}} {...register("mensaje", {
                            required: {
                                value: true,
                                message: "Debes llenar este campo",
                            },
                            minLength: {
                                value: 2,
                                message: "Debes tener mínimo 2 caracteres",
                            },
                            maxLength: {
                                value: 400,
                                message: "Debes tener máximo 400 caracteres",
                            },
                        })}/>

                        {errors.mensaje && <span style={{color: "red"}}>Error: {errors.mensaje?.message}</span>}
                    <button type="submit">Enviar</button>
                </form>
        </section>
    );
}

export default Contacto;