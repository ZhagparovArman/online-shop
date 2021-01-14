import { useState } from "react";
import firebase from "../../firebase";
import Modal from "../shared/Modal";
import "../../assets/sass/admin/shared.scss";

const Category = ({ category, fetchData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [name, setName] = useState(category.name);
  const [feature, setFeature] = useState(category.feature);
  const [description, setDescription] = useState(category.description);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("categories")
      .doc(category.id)
      .set({ ...category, name, feature, description });

    setIsOpen(false);
    fetchData();
  };

  const closeEditModal = () => {
    fetchData();
    setIsOpen(false);
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("categories").doc(category.id).delete();
    setIsOpenTwo(false);
    fetchData();
  };
  return (
    <>
      <div className="card">
        <p>
          <b>Название категории: </b>
          {name}
        </p>
        <p>
          <b>Характеристика: </b>
          {feature}
        </p>
        <div>
          <p>
            <b>Описание категории: </b>
          </p>
          <textarea placeholder="Описание" value={description} />
        </div>
        <div className="buttons">
          <button className="btn-edit" onClick={() => setIsOpen(true)}>
            Редактировать
          </button>
          <button className="btn-delete" onClick={() => setIsOpenTwo(true)}>
            Удалить
          </button>
        </div>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <button className="btn-close" onClick={closeEditModal}>
          X
        </button>
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
        <button className="btn-edit" onClick={onUpdate}>
          Редактировать
        </button>
      </Modal>
      <Modal open={isOpenTwo} onClose={() => setIsOpenTwo(false)}>
        <button className="btn-close" onClick={() => setIsOpenTwo(false)}>
          X
        </button>
        <div>
          <p>Вы действительно хотите удалить категорию:</p>
          <b>{name}</b>
        </div>
        <button className="btn-delete" onClick={onDelete}>
          Удалить
        </button>
      </Modal>
    </>
  );
};

export default Category;
