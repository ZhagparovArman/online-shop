import { useState, useEffect } from "react";
import firebase from "../../firebase";
import Category from "./Category";

const Categories = () => {
  const [name, setName] = useState("");
  const [feature, setFeature] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("categories").get();
      setCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const onCreate = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("categories").add({
      name: name,
      feature: feature,
      description: description,
    });
    setName("");
    setFeature("");
    setDescription("");
  };
  return (
    <div className="categories">
      <form onSubmit={onCreate}>
        <input
          type="text"
          placeholder="Название"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Характеристика"
          value={feature}
          onChange={(e) => setFeature(e.target.value)}
        />
        <textarea
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Создать категорию</button>
      </form>
      {categories.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
