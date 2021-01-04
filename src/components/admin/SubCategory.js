import { useState } from "react";
import firebase from "../../firebase";

const SubCategory = ({ subCategory, categories }) => {
  const [name, setName] = useState(subCategory.name);
  const [feature, setFeature] = useState(subCategory.feature);
  const [description, setDescription] = useState(subCategory.description);
  const [selectedCategory, setSelectedCategory] = useState(
    subCategory.category
  );

  const edit = () => {
    const db = firebase.firestore();
    db.collection("subCategories")
      .doc(subCategory.id)
      .set({
        ...subCategory,
        name,
        feature,
        description,
        category: selectedCategory,
      });
  };

  const deleteSub = () => {
    const db = firebase.firestore();
    db.collection("subCategories").doc(subCategory.id).delete();
  };
  return (
    <>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        name="categories"
      >
        <option defaultValue="">не созданы</option>
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
      <button onClick={edit}>Edit</button>
      <button onClick={deleteSub}>Delete</button>
    </>
  );
};

export default SubCategory;
