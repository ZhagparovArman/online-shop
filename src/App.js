import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "./firebase";
import Admin from "./pages/Admin";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <>
        <Link to="/admin">Admin</Link>
        <Switch>
          <Route exact path="/" component={Main} />

          <Route path="/admin" component={Admin} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
