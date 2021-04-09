import React from 'react'
import { Formik, Field, Form } from 'formik';
import { secciones } from './SeccionData';

const Seccion = () => {
    return (
        <div>


            <Formik
                initialValues={{
                    picked: ''

                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values }) => (
                    < Form >
                        {
                            secciones.map(seccion => {
                                console.log(seccion.nombre)
                                return (
                                    <>
                                        <h1> {seccion.nombre}</h1>
                                        <div role="group" aria-labelledby="my-radio-group">
                                        {
                                            seccion.preguntas.map(preg => {
                        
                                                console.log(preg.pregunta)
                        
                                                return (
                                                    <>  
                                                        <p> {preg.pregunta} </p>                        
                                                        {
                                                            preg.respuesta.map((res, index) => (
                                                                <>    
                                                                    <label>
                                                                        <Field type="radio" name={preg.pregunta} value={preg.ponderacion[index]} /> {preg.respuesta[index]}
                                                                    </label>
                                                                </>
                                                            ))
                                                        }
                                                    </>
                                                )
                        
                                            })
                                        }
                                        </div>
                                    </>
                                )
                             })

                        }

                       
                       
                        


                        

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default Seccion
