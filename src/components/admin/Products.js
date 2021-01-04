import { useState, useEffect } from "react";
import firebase from "../../firebase";

const db = firebase.firestore();

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [name, setName] = useState("");
  const [feature, setFeature] = useState({ title: "", value: "" });
  const [description, setDescription] = useState("");
  const [fileUrl, setFileUrl] = useState([]);
  const [price, setPrice] = useState("");
  const [isPopular, setIsPopular] = useState(false);

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
      feature: {
        title: feature.title,
        value: feature.value,
      },
      description: description,
      isPopular: isPopular,
    });
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
        <input
          type="text"
          placeholder="название характеристики"
          value={feature.title}
          onChange={(e) => setFeature({ ...feature, title: e.target.value })}
        />
        <textarea
          placeholder="значение характеристики"
          value={feature.value}
          onChange={(e) => setFeature({ ...feature, value: e.target.value })}
        />
        <input
          type="checkbox"
          value={isPopular}
          onChange={(e) => setIsPopular(!isPopular)}
        />
        <input
          type="number"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button>Submit</button>
      </form>
    </>
  );
};

export default Products;
