import React from 'react'
import { encuesta2 } from './EncuestaJson'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const Encuesta2 = () => {

    return (
        <div>

            {
                encuesta2.map(enc => {

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
                                                            {/* <label htmlFor={res}> {res} </label>
                                                            <input type="checkbox" value={preg.ponderacion[index]} />
                                                             */}
                                                            <FormControl component="fieldset">
                                                            <RadioGroup row aria-label="preguntas" name={res} >
                                                                <FormControlLabel value={preg.ponderacion[index]} control={<Radio />} label={res} />
                                                            </RadioGroup>
                                                            </FormControl>

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

export default Encuesta2