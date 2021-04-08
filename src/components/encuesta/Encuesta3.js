import React from 'react'
import { encuesta3 } from './EncuestaJson'

const Encuesta3 = () => {

    return (
        <div>
            {
                encuesta3.map(enc => {

                    return (
                        <>
                            <h2> {enc.encuesta} </h2>
                            {
                                enc.preguntas.map(preg => {
                                        return (
                                            <>
                                                <p> {preg.pregunta} </p>
                                                {
                                                    preg.respuesta.map((res, index) => (
                                                        <>
                                                            <label htmlFor={res}> {res} </label>
                                                            <input type="checkbox" value={preg.ponderacion[index]} />
                                                        </>
                                                    ))
                                                }
                                            </>
                                        )
                                })
                            }
                        </>
                    )

                })
            }
        </div>
    )
}

export default Encuesta3