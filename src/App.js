import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from "./views/Login"
import Registro from "./views/Registro"
import Dashboard from "./views/Dashboard"




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

          {/* <Route path="/registro">
            <SignUp/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route> */}
        </Switch>
    </Router>
  );
}

