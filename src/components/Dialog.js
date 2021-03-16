import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { TextField, ThemeProvider } from "@material-ui/core";
import Theme from "./TemaConfig";
import "@firebase/firestore";
import {
    useFirestore
  } from 'reactfire';
const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        top: "40%",
        left: "40%",
        overflow: "hidden",
        height: "100%",
        maxHeight: 500,
        display: "block"

        // // position: "absolute",
        // backgroundColor: theme.palette.background.paper,
        // border: "2px solid #000",
        // padding: 12,
        // overflow: "scroll"
    },
    body: {
        padding: 12
    },
    TextField:{
        padding:6

    }

}));

export default function FormDialog({open, handleClose}) {
    
    const firestore = useFirestore();
    const encuestadoCollection = firestore.collection('DatosEncuestado')

    const classes = useStyles();
    const [formData, setFormData] = useState({"Sexo": "","Edad en años":"", "Estado Civil": "",
                                         "Sin Informacion": "", "Primaria": "", "Secunadaria": "", 
                                         " Preparatotia o Bachillerato": "", "Tecnico Superior": "", 
                                         "Licenciatura": "", "Maestria": "", "Doctorado": "", 
                                         "Ocupacion Profesion Puesto": "", "Departamento Seccion Area": "",
                                         "Tipo Puesto": "", "Tipo Contratacion": "", "Tipo de Personal": "", 
                                         "Tipo de Jornada de Trabajo": "", "Realiza Rotaciones": "", "Tiempo en puesto Actual": "",
                                         "Tiempo experiencia laboral": ""})
                            

    const handleSubmit = (e) => {
        e.preventDefault();
        encuestadoCollection.add(formData)
    }
    return (
        <ThemeProvider theme={Theme} >
           
            <Dialog
                className={classes.paper}
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                // onSubmit={handleSubmit}
            >
                <AppBar position="static">
                    <Toolbar align="center">
                        <Typography variant="h6" align="center">
                            Datos del trabajador
            </Typography>
                    </Toolbar>
                </AppBar>

                <DialogTitle id="form-dialog-title" align="center">El llenar esta Información, no es obligatorio</DialogTitle>
                <FormControl className={classes.body} component="fieldset">
                    <FormLabel component="legend">Sexo:</FormLabel>
                    <RadioGroup onChange={(e)=>{setFormData({...formData, 'Sexo': e.target.value});console.log(formData)}} row aria-label="gender" name="gender1">
                        <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                        <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                    </RadioGroup>

                    {/* EDAD */}

                    <FormLabel component="legend">Edad en Años:</FormLabel>
                    <RadioGroup  onChange={(e)=>{setFormData({...formData, 'Edad en años': e.target.value});console.log(formData)}} row aria-label="edad" name="edad">
                        <FormControlLabel value="15-19" control={<Radio />} label="15-19" />
                        <FormControlLabel value="20-24" control={<Radio />} label="20-24" />
                        <FormControlLabel value="25-29" control={<Radio />} label="25-29" />
                        <FormControlLabel value="30-34" control={<Radio />} label="30-34" />
                        <FormControlLabel value="35-39" control={<Radio />} label="35-39" />
                        <FormControlLabel value="40-44" control={<Radio />} label="40-44" />
                        <FormControlLabel value="45-49" control={<Radio />} label="45-49" />
                        <FormControlLabel value="50-54" control={<Radio />} label="50-54" />
                        <FormControlLabel value="55-59" control={<Radio />} label="55-59" />
                        <FormControlLabel value="60-64" control={<Radio />} label="60-64" />
                        <FormControlLabel value="65-69" control={<Radio />} label="65-69" />
                        <FormControlLabel value="70 o mas" control={<Radio />} label="70 o mas" />
                    </RadioGroup>

                    <FormLabel component="legend">Estado Civil:</FormLabel>
                    <RadioGroup  onChange={(e)=>{setFormData({...formData, 'Estado Civil': e.target.value});console.log(formData)}} row aria-label="estado_civil" name="estado_civil">
                        <FormControlLabel value="Casado" control={<Radio />} label="Casado" />
                        <FormControlLabel value="Divorciado" control={<Radio />} label="Divorciado" />
                        <FormControlLabel value="Soltero" control={<Radio />} label="Soltero" />
                        <FormControlLabel value="Viudo" control={<Radio />} label="Viudo" />
                        <FormControlLabel value="Union_Libre" control={<Radio />} label="Union Libre" />
                    </RadioGroup>

                    {/* NIVEL DE ESTUDIOS */}
                    <h4>Maximo nivel de estudios</h4>
                    <FormLabel component="legend">Sin Información:</FormLabel>
                    <RadioGroup  onChange={(e)=>{setFormData({...formData, 'Sin Informacion': e.target.value});console.log(formData)}}  row aria-label="maximo nivel de estudios" name="mn_Estudios">
                        <FormControlLabel value="Sin_Información" control={<Radio />} label="Sin Información" />
                    </RadioGroup>

                    <FormLabel component="legend">Primaria:</FormLabel>
                    <RadioGroup  onChange={(e)=>{setFormData({...formData, 'Primaria': e.target.value});console.log(formData)}} row aria-label="Primaria" name="mn_Estudios">
                        <FormControlLabel value="Primaria-Terminada" control={<Radio />} label="Terminada" />
                        <FormControlLabel value="Primaria-Incompleta" control={<Radio />} label="Incompleta" />
                    </RadioGroup>
                    <FormLabel component="legend">Secundaria:</FormLabel>
                    <RadioGroup  onChange={(e)=>{setFormData({...formData, 'Secundaria': e.target.value});console.log(formData)}} row aria-label="Secundaria" name="mn_Estudios">
                        <FormControlLabel value="Terminada" control={<Radio />} label="Terminada" />
                        <FormControlLabel value="Incompleta" control={<Radio />} label="Incompleta" />
                    </RadioGroup>
                    <FormLabel component="legend">Preparatoria o Bachillerato:</FormLabel>
                    <RadioGroup onChange={(e)=>{setFormData({...formData, 'Preparatoria o Bachillerato': e.target.value});console.log(formData)}} row aria-label="Preparatoria_Bachillerato" name="mn_Estudios">
                        <FormControlLabel value="Terminada" control={<Radio />} label="Terminada" />
                        <FormControlLabel value="Incompleta" control={<Radio />} label="Incompleta" />
                    </RadioGroup>
                    <FormLabel component="legend">Tecnico Superior:</FormLabel>
                    <RadioGroup onChange={(e)=>{setFormData({...formData, 'Tecnico Superior': e.target.value});console.log(formData)}} row aria-label="Tecnico-Superior" name="mn_Estudios">
                        <FormControlLabel value="Terminada" control={<Radio />} label="Terminada" />
                        <FormControlLabel value="Incompleta" control={<Radio />} label="Incompleta" />
                    </RadioGroup>
                    <FormLabel component="legend">Licenciatura:</FormLabel>
                    <RadioGroup onChange={(e)=>{setFormData({...formData, 'Licenciatura': e.target.value});console.log(formData)}} row aria-label="Licenciatura" name="mn_Estudios">
                        <FormControlLabel value="Terminada" control={<Radio />} label="Terminada" />
                        <FormControlLabel value="Incompleta" control={<Radio />} label="Incompleta" />
                    </RadioGroup>
                    <FormLabel component="legend">Maestria:</FormLabel>
                    <RadioGroup onChange={(e)=>{setFormData({...formData, 'Maestria': e.target.value});console.log(formData)}} row aria-label="Maestria" name="mn_Estudios">
                        <FormControlLabel value="Terminada" control={<Radio />} label="Terminada" />
                        <FormControlLabel value="Incompleta" control={<Radio />} label="Incompleta" />
                    </RadioGroup>
                    <FormLabel component="legend">Doctorado:</FormLabel>
                    <RadioGroup onChange={(e)=>{setFormData({...formData, 'Doctorado': e.target.value});console.log(formData)}} row aria-label="Doctorado" name="mn_Estudios">
                        <FormControlLabel value="Terminada" control={<Radio />} label="Terminada" />
                        <FormControlLabel value="Incompleta" control={<Radio />} label="Incompleta" />
                    </RadioGroup>

                    {/* DATOS LABORALES */}
                    <h4>Datos Laborales:</h4>
                    <TextField
                        onChange={(e)=>{setFormData({...formData, 'Ocupacion Profesion Puesto': e.target.value});console.log(formData)}}
                        variant="outlined"
                        required
                        fullWidth
                        id="Ocupacion/Profesión/Puesto"
                        label="Ocupacion/Profesión/Puesto:"
                        name="Ocupacion/Profesión/Puesto"
                        className={classes.TextField}
                    // onChange={(ev) =>setemail(ev.target.value)}
                    />
                    <TextField
                        onChange={(e)=>{setFormData({...formData, 'Departamento Seccion Area': e.target.value});console.log(formData)}}
                        variant="outlined"
                        required
                        fullWidth
                        id="Departamento/Sección/Área"
                        label="Departamento/Sección/Área:"
                        name="Departamento/Sección/Área"
                        className={classes.TextField}
                    // onChange={(ev) =>setemail(ev.target.value)}
                    />
                 {/* Tipo de Puesto */}
                  <FormLabel component="legend">Tipo de Puesto:</FormLabel>
                    <RadioGroup onChange={(e)=>{setFormData({...formData, 'Tipo Puesto': e.target.value});console.log(formData)}} row aria-label="Tipo_Puesto" name="Tipo_puesto">
                        <FormControlLabel value="Operativo" control={<Radio />} label="Operativo" />
                        <FormControlLabel value="Supervisor" control={<Radio />} label="Supervisor" />
                        <FormControlLabel value="Profecional_tecnico" control={<Radio />} label="Profesional o Tecnico" />
                        <FormControlLabel value="Gerente" control={<Radio />} label="Gerente" />
                    </RadioGroup>
                {/* Tipo de contratación */}
    
                <FormLabel component="legend">Tipo de contratación:</FormLabel>
                    <RadioGroup onChange={(e)=>{setFormData({...formData, 'Tipo Contratacion': e.target.value});console.log(formData)}} row aria-label="Tipo_contratación" name="tipo_contratación">
                        <FormControlLabel value="Por obra o proyecto" control={<Radio />} label="Por obra o proyecto" />
                        <FormControlLabel value="Tiempo indeterminado" control={<Radio />} label="Tiempo indeterminado" />
                        <FormControlLabel value="Tiempo determinado (temporal)" control={<Radio />} label="Tiempo determinado (temporal)" />
                        <FormControlLabel value="Honorarios" control={<Radio />} label="Honorarios" />
                    </RadioGroup>
                <FormLabel component="legend">Tipo de personal:</FormLabel>
                    <RadioGroup onChange={(e)=>{setFormData({...formData, 'Tipo Personal': e.target.value});console.log(formData)}} row aria-label="Tipo_personal" name="tipo_personal">
                        <FormControlLabel value="Sindicalizado" control={<Radio />} label="Sindicalizado" />
                        <FormControlLabel value="Confianza" control={<Radio />} label="Confianza" />
                        <FormControlLabel value="Ninguno" control={<Radio />} label="Ninguno" />
                    </RadioGroup>
                <FormLabel component="legend">Tipo de jornada de trabajo:</FormLabel>
                    <RadioGroup onChange={(e)=>{setFormData({...formData, 'Tipo de Jornada de Trabajo': e.target.value});console.log(formData)}}  row aria-label="Tipo_jornada_trabajo" name="Tipo_jornada_trabajo">
                        <FormControlLabel value="Fijo_nocturno_(entre las 20:00 y 6:00 hrs)" control={<Radio />} label="Fijo nocturno (entre las 20:00 y 6:00 hrs)" />
                        <FormControlLabel value="Fijo_diurno_(entre las 6:00 y 20:00 hrs" control={<Radio />} label="Fijo diurno (entre las 6:00 y 20:00 hrs" />
                        <FormControlLabel value="Fijo_mixto_(combinación de nocturno y diurno)" control={<Radio />} label="Fijo mixto (combinación de nocturno y diurno)" />
                    </RadioGroup>
                <FormLabel component="legend">Realiza rotación de turnos:</FormLabel>
                    <RadioGroup onChange={(e)=>{setFormData({...formData, 'Realiza Rotaciones': e.target.value});console.log(formData)}} row aria-label="Rotacion_turnos" name="Rotacion_turno   s">
                        <FormControlLabel value="si" control={<Radio />} label="Si" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>

                    <h4>Experiencia en años:</h4>

                <FormLabel component="legend">Tiempo en el puesto actual:</FormLabel>
                    <RadioGroup onChange={(e)=>{setFormData({...formData, 'Tiempo en puesto Actual': e.target.value});console.log(formData)}}  row aria-label="Tiempo_puesto_actual" name="Tiempo_puesto_actual">
                        <FormControlLabel value="Menos_6_meses" control={<Radio />} label="Menos de 6 meses" />
                        <FormControlLabel value="Entre_6_meses_1_año" control={<Radio />} label="Entre 6 meses y 1 año" />
                        <FormControlLabel value="Entre_1_a_4_años" control={<Radio />} label="Entre 1 a 4 años" />
                        <FormControlLabel value="Entre_5_a_9_años" control={<Radio />} label="Entre 5 a 9 años" />
                        <FormControlLabel value="Entre_10_14_años" control={<Radio />} label="Entre 10 a 14 años" />
                        <FormControlLabel value="Entre_15_a_19_años" control={<Radio />} label="Entre 15 a 19 años" />
                        <FormControlLabel value="Entre_20_a_24_años" control={<Radio />} label="Entre 20 a 24 años" />
                        <FormControlLabel value="25 años o mas" control={<Radio />} label="25 años o mas " />
                    </RadioGroup>
                
                <FormLabel component="legend">Tiempo en experiencia laboral:</FormLabel>
                    <RadioGroup onChange={(e)=>{setFormData({...formData, 'Tiempo experiencia laboral': e.target.value});console.log(formData)}} row aria-label="Tiempo_experiencia_laboral" name="Tiempo_experieccnia_laboral">
                        <FormControlLabel value="Menos_6_meses" control={<Radio />} label="Menos de 6 meses" />
                        <FormControlLabel value="Entre_6_meses_1_año" control={<Radio />} label="Entre 6 meses y 1 año" />
                        <FormControlLabel value="Entre_1_a_4_años" control={<Radio />} label="Entre 1 a 4 años" />
                        <FormControlLabel value="Entre_5_a_9_años" control={<Radio />} label="Entre 5 a 9 años" />
                        <FormControlLabel value="Entre_10_14_años" control={<Radio />} label="Entre 10 a 14 años" />
                        <FormControlLabel value="Entre_15_a_19_años" control={<Radio />} label="Entre 15 a 19 años" />
                        <FormControlLabel value="Entre_20_a_24_años" control={<Radio />} label="Entre 20 a 24 años" />
                        <FormControlLabel value="25 años o mas" control={<Radio />} label="25 años o mas " />
                    </RadioGroup>



                </FormControl>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
          </Button>
                    <Button color="primary" onClick={handleSubmit}>
                        Enviar
          </Button>
                </DialogActions>
            </Dialog>
     </ThemeProvider>
    );
}
