import React, {useState} from 'react';
import Navbar from './Navbar';
import Cajon from './Cajon';
import personas from "../assets/img/personas.png";
import grafica from "../assets/img/grafica.png";
import Theme from "./TemaConfig"
import Dialog from "./Dialog"
// import Encuesta from "../views/Encuesta"
// import Prueba from './encuesta/prueba'

// import  { Link } from  'react-router-dom';
import {
    Hidden,
    makeStyles,
    Grid,
    Box,
    TextField,
    Button,
    ThemeProvider
} from '@material-ui/core'

// import { useHistory } from "react-router-dom";


const estilos = makeStyles(theme =>({
    root:{
        display: 'flex'
    },
    root1: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    img1:{
        width: '30px',
        height: '30px'

    },
    img2: {
        width: '250px',
        height: '250px'
    },
    box:{
        borderRadius: '1px'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
      btn:{
        fontSize:'10px',
        color:'white',
        background: '#4caf50',
        border:'0px',
        width:'1000px',
        height:'50px'
        
    }

}))

export default function Contenedor()  {
    const classes = estilos()
    const [abrir, setAbrir] = useState(false)
    const [muestra, setMuestra] = useState(0)
    const [muestraObtenida, setMuestraObtenida] = useState(0)
    const [numEmpleados, setnumEmpleados] = useState(0)

    // let history = useHistory()
    // // muestra --> nos permite acceder al valor .... setMuestra -> nos permite hacer cambios al valor;

    const accionAbrir = () =>{
        setAbrir(!abrir)
    }
    
    const calcularMuestra = () => {
        let empleados = (0.9604*muestra)/(0.0025*(muestra-1)+0.9604)
        setnumEmpleados(Math.round(empleados))
        setMuestraObtenida(muestra)
    }
  
    const submitDatosEncuestado = () =>{
       
        setOpen(true);
        // history.push('/datos');
    }

    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    
    //Este es el contenedor del lado izquierdo de la pantalla, 
    //Con el navbar integrado y responsivo
    return (
        <ThemeProvider theme={Theme}>
            <div className={classes.root}>
            <Navbar accionAbrir={accionAbrir} />
            <Hidden xsDown>
               <Cajon
               variant='permanent'
               open={true}
               />
            </Hidden>

            <Hidden smUp>
               <Cajon
               variant='temporary'
               open={abrir}
               onClose={accionAbrir}
            />
            </Hidden>
           
            <div className={classes.content}>
                <div className={classes.toolbar}></div> 

            {/* Esta es la parte donde se pregunta cuantos empleados tiene la empresa */}
            {/* Vamos a crear un state para el input del numero de trabajadores */}

                <Grid container>
                <Grid item xs={12}>
                    <Box>
                        <h1>¡Bienvenido!</h1>
                        <h3>¿Cuantas personas tiene en su empresa?</h3>
                        <form className={classes.root1} noValidate autoComplete="off">
                            <TextField 
                            id="outlined-basic" 
                            label="Numero de trabajadores"
                            variant="outlined" 
                            onChange={(e)=>  setMuestra(e.target.value)}
                            
                             
                             />
                            {/* <Prueba setMuestra={setMuestra}/> */}
                            <Button
                            variant="contained" 
                            color="primary" 
                            size='large'
                            onClick={ ()=> calcularMuestra()}
                            
                            >
                                Calcular Muestra
                            </Button>
                        </form>
                    </Box>
                    <Dialog
                    open={open}
                    handleClose={handleClose}
                    />
                </Grid>
            </Grid>

            {/* Esta es la parte donde nos devulve el resultado de la formula de la empresa */}
            
            <Grid container>
                <Grid item xs={6} >
                    <Box margin={2} className={classes.box} boxShadow={3}>
                        {
                            numEmpleados > 0
                            ?
                            <>
                            <h3>La encuesta se plicara a :</h3>
                            <h1>{numEmpleados} Personas</h1>
                            <img alt= "resultado" src={personas} className={classes.img1}></img>
                            </>
                            :<p> coloca el número de empleados </p>
                        }
                        
                    </Box>
                </Grid>
                <Grid item xs={6}>
                     <Box>   
                        <img alt="resultado" src={grafica} className={classes.img2}></img>
                    </Box>
                </Grid>
            </Grid>




            {/* Esta parte es donde nos arroja el boton para saber cual encuesta debemos aplicar  */}
            <Grid container>
                <Grid item xs={6} sm={6}  >
                    <Box>
                        <form>
                            <h3>Se debe de aplicar la encuesta:</h3>
                            {
                                muestraObtenida > 0 && muestraObtenida <= 15 &&   <Button className={classes.btn} onClick={()=> submitDatosEncuestado('uno')}  >Encuesta 1</Button> 
                            }
                            {
                                muestraObtenida >= 16 && muestraObtenida <= 50 &&  <Button className={classes.btn} onClick={()=> submitDatosEncuestado('dos')}>Encuesta 2</Button> 
                            }
                            {
                                muestraObtenida >= 51  && <Button className={classes.btn} onClick={()=> submitDatosEncuestado('tres')}>Encuesta 3</Button> 
                            }


                            

                        </form>
                    </Box>
                </Grid>
            </Grid>
            </div>
        </div>

        </ThemeProvider>
       
        
    )
}


