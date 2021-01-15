import { useState, useEffect } from "react";
import firebase from "../../firebase";
import SubCategory from "./SubCategory";
import Modal from "../shared/Modal";
import "../../assets/sass/admin/shared.scss";
import "../../assets/sass/admin/sub-categories.scss";

const SubCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  // const [feature, setFeature] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  const fetchData = async () => {
    const db = firebase.firestore();
    const data = await db.collection("subCategories").get();
    setSubCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    db.collection("subCategories").add({
      name: name,
      // feature: feature,
      description: description,
      category: selectedCategory,
    });
    setName("");
    // setFeature("");
    setDescription("");
    setSelectedCategory("");
    setIsOpen(false);
    fetchData();
  };
  return (
    <div className="sub-categories">
      <h1>Подкатегорий</h1>
      <button className="open-modal" onClick={() => setIsOpen(true)}>
        Создать подкатегорию
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <button className="btn-close" onClick={() => setIsOpen(false)}>
          X
        </button>
        <form onSubmit={onCreate}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            name="categories"
          >
            <option defaultValue="">не выбрано</option>
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            placeholder="Название"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* <input
            type="text"
            placeholder="Характеристика"
            value={feature}
            onChange={(e) => setFeature(e.target.value)}
          /> */}
          <textarea
            placeholder="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn-submit">Сохранить</button>
        </form>
      </Modal>
      <div className="sub-category">
        {subCategories.map((subCategory) => {
          return (
            <SubCategory
              key={subCategory.id}
              subCategory={subCategory}
              categories={categories}
              fetchData={fetchData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SubCategories;
