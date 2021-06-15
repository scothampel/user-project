import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Nav from "./components/Nav";
import Show from "./components/Show";
import useLocalState from "./hooks/useLocalState";
import "./styles/App.css";

function App() {
  const [currentUser, setCurrentUser] = useLocalState('currentUser');
  const [users, setUsers] = useLocalState('users');

  return (
    <Router>
      <Nav firstName={currentUser ? currentUser.firstName : ''} users={users} />
      <Switch>
        <Route path="/login">
          {currentUser ? <Redirect to='/' /> : <Login setCurrentUser={setCurrentUser} users={users} />}
        </Route>
        <Route path="/create">
          <Create users={users} setUsers={setUsers} />
        </Route>
        <Route path="/edit">
          <Edit currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} setUsers={setUsers} />
        </Route>
        <Route path="/logout">
          <Logout setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/">
          <Show currentUser={currentUser} users={users} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
