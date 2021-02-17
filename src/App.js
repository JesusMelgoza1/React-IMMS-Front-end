import { FirebaseDatabaseProvider } from "@react-firebase/database";
import firebase from './components/firebase/firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login/login';
import SignUp from './components/registro/SignUp';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="./components/login/login">Login</Link>
            </li>
            <li>
              <Link to="./components/registro/SignUp">registro</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="./components/login/login">
            <Login />
          </Route>
          <Route path="./components/registro/registro">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function login() {
  return <h2>login</h2>;
}

function registro() {
  return <h2>registro</h2>;
}

function Users() {
  return <h2>Users</h2>;
}



// function App() {
//   return (
//     <div>
//       <Login/>
//     </div>
//   );
// }

// export default App;
