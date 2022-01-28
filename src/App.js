import "./App.css";
import Home from "./components/Home";
import Read from "./components/Read";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
import Create from "./components/Create";
import { UserProvider } from "./components/OwnContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <Router>
        <Route path="/create" component={Create} />
        <Route path="/read/:id" component={Read} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/delete/:id" component={Delete} />
        <Route exact path="/" component={Home} />
      </Router>
    </UserProvider>
  );
}

export default App;
