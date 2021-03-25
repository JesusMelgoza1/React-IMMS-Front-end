import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./views/Login"
import Registro from "./views/Registro"
import Dashboard from "./views/Dashboard"
import Encuesta from "./views/Encuesta";
import DatosEncuestado from "./components/DatosEncuestado";
import FormDialog from "./components/Dialog";


export default function App() {
  
  
  
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Login/>
          </Route>
          <Route path="/registro">
            <Registro/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/encuesta">
            <Encuesta/>
          </Route>
          <Route path="/datosEncuestado">
            <DatosEncuestado/>
          </Route>
          <Route path="/datos">
            <FormDialog/>
          </Route>


        </Switch>
    </Router>
  );
}

