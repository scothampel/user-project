import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Login from "./components/Login";
import Show from "./components/Show";
import "./styles/App.css";

function App() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {currentUser ? <Redirect to='/' /> : <Login />}
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/edit">
          <Edit />
        </Route>
        <Route path="/">
          <Show />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
