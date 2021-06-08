import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Login from "./components/Login";
import Show from "./components/Show";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
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
