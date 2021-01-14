import { useState, useEffect } from "react";
import firebase from "../../firebase";
import Product from "./Product";
import Modal from "../shared/Modal";
import "../../assets/sass/admin/shared.scss";

const db = firebase.firestore();

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [name, setName] = useState("");
  const [feature, setFeature] = useState([]);
  const [description, setDescription] = useState("");
  const [fileUrl, setFileUrl] = useState([]);
  const [price, setPrice] = useState("");
  const [isPopular, setIsPopular] = useState(false);
  const [featTitle, setFeatTitle] = useState("");
  const [featValue, setFeatValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("categories").get();
      setCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref("images");
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const url = await fileRef.getDownloadURL();
    setFileUrl([...fileUrl, { url: url, title: file.name }]);
  };

  const deleteUrl = (name) => {
    const storageRef = firebase.storage().ref("images").child(name);
    storageRef.delete();
  };

  const addFeature = (e) => {
    e.preventDefault();
    setFeature([...feature, { title: featTitle, value: featValue }]);
    setFeatTitle("");
    setFeatValue("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // if (!fileUrl) {
    //   return;
    // }
    await db.collection("products").add({
      name: name,
      image: fileUrl,
      price: price,
      category: selectedCategory,
      feature: feature,
      description: description,
      isPopular: isPopular,
    });
    setFeature([]);
    setFileUrl([]);
    setName("");
    setDescription("");
    setIsPopular("");
    setSelectedCategory("");
    setPrice("");
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const products = await db.collection("products").get();
      setProducts(products.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchUsers();
  }, []);
  return (
    <>
      <h1>Товары</h1>
      <button className="open-modal" onClick={() => setIsOpen(true)}>
        Создать товар
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <button className="btn-close" onClick={() => setIsOpen(false)}>
          X
        </button>
        <form onSubmit={onSubmit}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            name="categories"
          >
            <option defaultValue="">не созданы</option>
            {categories.map((сategory) => {
              return (
                <option key={сategory.id} value={сategory.name}>
                  {сategory.name}
                </option>
              );
            })}
          </select>
          <input type="file" onChange={onFileChange} />
          <input
            type="text"
            placeholder="Название"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div>
            <input
              type="text"
              placeholder="название характеристики"
              value={featTitle}
              onChange={(e) => setFeatTitle(e.target.value)}
            />
            <div>
              <input
                type="text"
                placeholder="значение характеристики"
                value={featValue}
                onChange={(e) => setFeatValue(e.target.value)}
              />
              <button className="add-feature" onClick={addFeature}>
                Добавить
              </button>
            </div>
          </div>
          <div>
            {feature.map((feat) => (
              <div>
                <p>{feat.title}</p>
                <p>{feat.value}</p>
              </div>
            ))}
          </div>
          <div>
            <input
              type="checkbox"
              value={isPopular}
              onChange={(e) => setIsPopular(!isPopular)}
            />
            <span>Популярный товар</span>
          </div>
          <input
            type="number"
            placeholder="Цена"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button className="btn-submit">Сохранить</button>
        </form>
      </Modal>
      {products.map((product) => (
        <Product key={product.id} product={product} categories={categories} />
      ))}
    </>
  );
};

export default Products;
