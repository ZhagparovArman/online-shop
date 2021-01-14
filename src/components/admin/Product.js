import { useState, useEffect } from "react";
import firebase from "../../firebase";

const db = firebase.firestore();
const storageRef = firebase.storage().ref("images");

const Product = ({ product, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(product.category);
  const [name, setName] = useState(product.name);
  const [feature, setFeature] = useState(product.feature);
  const [description, setDescription] = useState(product.description);
  const [fileUrl, setFileUrl] = useState(product.image);
  const [price, setPrice] = useState(product.price);
  const [isPopular, setIsPopular] = useState(product.isPopular);
  const [featTitle, setFeatTitle] = useState("");
  const [featValue, setFeatValue] = useState("");

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
    const newFileUrl = fileUrl.filter((file) => file.title !== name);
    setFileUrl([...newFileUrl]);
  };

  const updateTitle = (e) => {
    // e.preventDefault();
    setFeatTitle(e.target.value);
  };

  const updateValue = (e) => {
    // e.preventDefault();
    setFeatValue(e.target.value);
  };

  const updateFeature = (e, feat) => {
    e.preventDefault();
    const newFeature = feature.map((f) => {
      if (f.title === feat.title) {
        f.title = featTitle;
        f.value = featValue;
      }
    });
    setFeature([...newFeature]);
  };

  const onEdit = () => {
    const db = firebase.firestore();
    db.collection("products")
      .doc(product.id)
      .set({
        ...product,
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

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("products").doc(product.id).delete();
    // deleteUrl(banner.image.title);
  };

  return (
    <>
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
      {fileUrl.map((img, i) => {
        return (
          <div key={i}>
            <img width="100" height="100" src={img.url} alt="" />

            <button onClick={() => deleteUrl(img.title)}>delete</button>
          </div>
        );
      })}

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
      {console.log(feature)}
      {feature.map((feat) => {
        return (
          <div>
            <input
              type="text"
              placeholder="название характеристики"
              value={feat.title}
              // onChange={(e) => updateTitle(e)}
            />
            <input
              placeholder="значение характеристики"
              value={feat.value}
              // onChange={(e) => updateValue(e)}
            />
            <button onClick={(e) => updateFeature(e, feat)}>
              update feature
            </button>
          </div>
        );
      })}

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
      <button onClick={onEdit}>edit</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};

export default Product;
