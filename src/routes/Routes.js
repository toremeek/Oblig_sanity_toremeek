
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Om from "../pages/About";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";


const Routes = () => (
  <Router>
    <Nav />
    <Switch>

    <Route exact path="/">
        <Home />
    </Route>

    <Route exact path="/Om">
        <Om />
    </Route>

    <Route exact path="*">
        <NoMatch />
    </Route>

    </Switch>
  </Router>
);

export default Routes;
