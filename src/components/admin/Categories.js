import { useState, useEffect } from "react";
import firebase from "../../firebase";
import Category from "./Category";
import Modal from "../shared/Modal";

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [feature, setFeature] = useState([]);
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const db = firebase.firestore();
    //   const data = await db.collection("categories").get();
    //   setCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // };
    fetchData();
  }, []);

  const fetchData = async () => {
    const db = firebase.firestore();
    const data = await db.collection("categories").get();
    setCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const onCreate = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("categories").add({
      name: name,
      feature: feature,
      description: description,
    });
    fetchData();
    setName("");
    setFeature("");
    setDescription("");
    setIsOpen(false);
  };
  return (
    <div className="categories">
      <h1>Категорий</h1>
      <button className="open-modal" onClick={() => setIsOpen(true)}>
        Создать категорию
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <button className="btn-close" onClick={() => setIsOpen(false)}>
          X
        </button>
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
          <button className="btn-submit">Сохранить</button>
        </form>
      </Modal>
      <div className="category">
        {categories.map((category) => {
          return (
            <Category
              key={category.id}
              category={category}
              fetchData={fetchData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
