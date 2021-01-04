import { useState } from "react";
import firebase from "../../firebase";

const Category = ({ category }) => {
  const [name, setName] = useState(category.name);
  const [feature, setFeature] = useState(category.feature);
  const [description, setDescription] = useState(category.description);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("categories")
      .doc(category.id)
      .set({ ...category, name, feature, description });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("categories").doc(category.id).delete();
  };
  return (
    <>
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
      <button onClick={onUpdate}>edit</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};

export default Category;
