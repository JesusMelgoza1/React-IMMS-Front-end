import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/login/login';
import SignUp from './components/registro/SignUp';


export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/registro">
            <SignUp />
          </Route>
        </Switch>
     
    </Router>
  );
}

