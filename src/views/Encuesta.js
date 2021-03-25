import React from 'react'
import Pregunta from '../components/encuesta/Pregunta'
import Encuesta1 from '../components/encuesta/Data'

const Encuesta = () => {
    return (
        <div>
            <Pregunta {...Encuesta1}/>
        </div>
    )
}

export default Encuesta
