import React, { useState } from 'react'
import  {encuesta1}  from './JsonEncuesta1'
import ReactPaginate from 'react-paginate'

const Encuesta1 = () => {
     let seccion = '';
    const encuestas = JSON.stringify(encuesta1)

    const [secciones, setSecciones] = useState(encuestas.slice(0,10))
    const [pageNumber, setPageNumber] = useState(0);

    const cuestionPerPage = 10;
    const pagesVisited = pageNumber * secciones

    const displayPreguntas = secciones
    .slice(pagesVisited, pagesVisited + cuestionPerPage)
    encuesta1.map(enc =>{
        return (
            <>
                <h2>{enc.encuesta}</h2>
                {
                     enc.preguntas.map(preg => {

                        if (preg.seccion !== seccion) {
                            seccion = preg.seccion;
                            return (
                                <>
                                    
                                    <h2> {preg.seccion} </h2>
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
                        } else {
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
                        }
                    })

                }
            </>
        )
    });
    const pageCount = Math.ceil()
    
    return (
        
        <div>
            {displayPreguntas} 
            <ReactPaginate
             previousLabel={"Anterior"}
             nextLabel={"Siguiente"}
             pageCount={}
             
            />
        
        </div>
        
    )

 }
export default Encuesta1