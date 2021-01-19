import { useState } from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import Categories from "../components/admin/Categories";
import SubCategories from "../components/admin/SubCategories";
import Banners from "../components/admin/Banners";
import Products from "../components/admin/Products";
import firebase from "../firebase";
import "../assets/scss/admin.scss";

const Admin = ({ match }) => {
  const [notification, setNotification] = useState("");
  let history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        setNotification("Logged out");
        setTimeout(() => {
          setNotification("");
        }, 2000);
      });
    localStorage.clear();
    history.push("/auth");
  };
  return (
    <div>
      <div className="logout">
        <button className="btn btn--primary" onClick={(e) => handleLogout(e)}>
          Выйти
        </button>
      </div>

      <div className="sidenav">
        <h1>Admin</h1>
        <Link to={`${match.url}/categories`}>Категорий</Link>
        <Link to={`${match.url}/subcategories`}>Подкатегорий</Link>
        <Link to={`${match.url}/banners`}>Баннеры</Link>
        <Link to={`${match.url}/products`}>Товары</Link>
      </div>
      <div className="main">
        <Switch>
          <Route path={match.url + "/categories"} component={Categories} />
          <Route
            path={match.url + "/subcategories"}
            component={SubCategories}
          />
          <Route path={match.url + "/banners"} component={Banners} />
          <Route path={match.url + "/products"} component={Products} />
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
