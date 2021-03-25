import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useFirebaseApp} from 'reactfire';
import { useHistory } from "react-router-dom";
import 'firebase/auth';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ComponentRegistro() {
  const classes = useStyles();
  const firebase = useFirebaseApp();
  const [email, setemail] = useState('');
  const [contrasena, setcontrasena] = useState('');
  let history = useHistory();

  const submit = async (event) =>{
    console.log(email, contrasena);
    event.preventDefault();
     await firebase.auth().createUserWithEmailAndPassword(email,contrasena);
     history.push('/');
  }

  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Crear Cuenta
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo Electronico"
                name="email"
                onChange={(ev) =>setemail(ev.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                onChange={(ev) =>setcontrasena(ev.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submit}
          
            
          >
            Registrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item style={{flex:1, justifyContent:"center", alignItems:"center"}}>
              <Link href="/" variant="body2" >
                Ya tienes una cuenta? Inicia sesion
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}



