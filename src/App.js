import { useState, useEffect } from "react";
import Banners from "./components/admin/Banners";
import Categories from "./components/admin/Categories";
import Products from "./components/admin/Products";
import SubCategories from "./components/admin/SubCategories";
import firebase from "./firebase";

function App() {
  return (
    <>
      <Categories />
      <SubCategories />
      <Banners />
      <Products />
    </>
  );
}

export default App;
