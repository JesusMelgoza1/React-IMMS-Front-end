import React from 'react'
import Encuesta1 from '../components/encuesta/Encuesta1'
import Encuesta2 from '../components/encuesta/Encuesta2'
import Encuesta3 from '../components/encuesta/Encuesta3'

const Prueba = ({setMuestra}) => {

    
    setMuestra.target.value()
    
    if (setMuestra >= 15){
        return(
            <Encuesta1/>
        )
    }else if (setMuestra >=16 && setMuestra <=50 ) {
        return (
            <Encuesta2/>
        )
    }else if (setMuestra >=51) {
        return(
            <Encuesta3/>
        )
    }
}

const Encuesta = () => {

    
    return (
        <>
          {Prueba}
        
        </>
    )

    
}

export default Encuesta
