import React from 'react'
import { preg } from './EncuestaJson'

const Test = () => {


    return (
        <div>

            {
                preg.map(enc => {

                    return (
                        <>
                            <h1> {enc.encuesta} </h1>
                            {
                                enc.preguntas.map(preg => {

                                    return (
                                        <>
                                            <h4>{preg.seccion}</h4>
                                            <h1> {preg.pregunta} </h1>

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

export default Test
