import React, { useEffect, useState } from 'react'

const Encuesta = (props) => {
const [encuesta, setEncuesta] = useState('')


    useEffect(() => {        
        setEncuesta(localStorage.getItem("encuesta"));
    }, [encuesta])



    console.log(props.location);
    //let encuesta = props.location.LinkProps;

    return (
        <div>
            <h1>Encuesta {encuesta}</h1>
            
        </div>
    )
}

export default Encuesta
