import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./components/admin/Auth";
import About from "./components/main/About";
import Catalog from "./components/main/Catalog";
import ProductItem from "./components/main/ProductItem";
import Products from "./components/main/Products";
import Search from "./components/main/Search";
import PrivateRoute from "./components/shared/PrivateRoute";
import Admin from "./pages/Admin";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/search" component={Search} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/products" component={Products} />
          <Route path="/product-item" component={ProductItem} />
          <Route path="/auth" component={Auth} />
          <PrivateRoute path="/admin" component={Admin} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
