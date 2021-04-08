import React from 'react'
import {  useEffect } from "react"

const Pregunta = ({pregunta, respuesta, ponderacion }) => {
    
    useEffect(()=>{
        console.log(pregunta, respuesta, ponderacion)
    }, [pregunta, respuesta, ponderacion])

    return (
        <div>
           <p>¿ {pregunta} ?</p>

        {
            
           respuesta.map(res => (
               
                <p> key={res} </p>
             ))
            } 
            
           {
            ponderacion.map(pond => (
                 <p> {pond} </p>
             ))
            }
        </div>
    )
}

export default Pregunta
   
           
//            {/* <p>{Encuesta1}</p> */}
//            {/* <p>{Guía_de_Referencia_I_EJEMPLO_DE_CUESTIONARIO_PARA_IDENTIFICAR_A_LOS_TRABAJADORES_QUE_FUERON_SUJETOS_A_ACONTECIMIENTOS_TRAUMÁTICOS_SEVEROS}</p> */}
          
// {/*           
//            
// {/*         
//            {
//                seccion1.map(res =>(
//                    <p>{res}</p>
//                ))
//            }
//            {
//                preguntas.map(pre => (
//                    <p>{pre}</p>
//                ))
//            }
//            {
//                respuestas.map(res =>(
//                    <p>{res}</p>
//                ))
//            } */}

