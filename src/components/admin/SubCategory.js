import { useState } from "react";
import firebase from "../../firebase";
import Modal from "../shared/Modal";
import "../../assets/sass/admin/shared.scss";

const SubCategory = ({ subCategory, categories, fetchData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [name, setName] = useState(subCategory.name);
  // const [feature, setFeature] = useState(subCategory.feature);
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
        // feature,
        description,
        category: selectedCategory,
      });
    setIsOpen(false);
    fetchData();
  };

  const deleteSub = () => {
    const db = firebase.firestore();
    db.collection("subCategories").doc(subCategory.id).delete();
    setIsOpenTwo(false);
    fetchData();
  };
  return (
    <>
      <div className="card">
        <p>
          <b>Название подкатегории: </b>
          {name}
        </p>
        <p>
          <b>Категория: </b>
          {selectedCategory}
        </p>
        <div>
          <p>
            <b>Описание подкатегории: </b>
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
        <button className="btn-close" onClick={() => setIsOpen(false)}>
          X
        </button>
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
        <button className="btn-edit" onClick={edit}>
          Редактировать
        </button>
      </Modal>
      <Modal open={isOpenTwo} onClose={() => setIsOpenTwo(false)}>
        <button className="btn-close" onClick={() => setIsOpenTwo(false)}>
          X
        </button>
        <div>
          <p>Вы действительно хотите удалить подкатегорию:</p>
          <b>{name}</b>
        </div>
        <button className="btn-delete" onClick={deleteSub}>
          Удалить
        </button>
      </Modal>
    </>
  );
};

export default SubCategory;
