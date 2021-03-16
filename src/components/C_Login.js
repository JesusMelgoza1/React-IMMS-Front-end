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
import 'firebase/auth'
import { useHistory } from "react-router-dom";



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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ComponentLogin() {
  
  const [email, setemail] = useState('');
  const [contrasena, setcontrasena] = useState('')
  const firebase = useFirebaseApp();
  let history = useHistory()


  const submit = async(event) =>{

    console.log(email, contrasena);
    event.preventDefault();
    await firebase.auth().signInWithEmailAndPassword(email,contrasena)
    .then( () => { 
      console.log('Ya estas logueado ')
      history.push('/dashboard')
    })
    .catch(err => console.log(err))
    
    // LOGIN o SIGNUP --> HOME -->
  }

  // const firebase = useFirebaseApp();
  // console.log(firebase);
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesion
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electronico"
            name="email"
            // autoComplete={false}
            // autoFocus
            onChange={(ev) =>setemail(ev.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            requiredx
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            // autoComplete={false}
            onChange={(ev) =>setcontrasena(ev.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submit}
          >
            Iniciar sesion
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/registro" variant="body2">
                {"No tienes cuenta? Registrate"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}