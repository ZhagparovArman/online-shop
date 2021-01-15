import { useState } from "react";
import firebase from "../../firebase";
import Modal from "../shared/Modal";
import "../../assets/sass/admin/shared.scss";

const Banner = ({ subCategories, banner, fetchBanners }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [fileUrl, setFileUrl] = useState(banner.image);
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    banner.subCategory
  );
  const [name, setName] = useState(banner.name);
  const [price, setPrice] = useState(banner.price.price);
  const [showPrice, setShowPrice] = useState(banner.price.showPrice);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref("images");
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const url = await fileRef.getDownloadURL();
    setFileUrl({ url: url, title: file.name });
  };

  const deleteUrl = (name) => {
    const storageRef = firebase.storage().ref("images").child(name);
    storageRef.delete();
    setFileUrl({});
  };

  const onEdit = () => {
    const db = firebase.firestore();
    db.collection("banners")
      .doc(banner.id)
      .set({
        ...banner,
        name,
        price: { price: price, showPrice: showPrice },
        subCategory: selectedSubCategory,
        image: fileUrl,
      });
    fetchBanners();
    setIsOpen(false);
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("banners").doc(banner.id).delete();
    deleteUrl(banner.image.title);
    fetchBanners();
    setIsOpenTwo(false);
  };
  return (
    <>
      <div className="card">
        <p>
          <b>Название баннера: </b>
          {name}
        </p>
        <p>
          <b>Подкатегория: </b>
          {selectedSubCategory}
        </p>
        <div className="banner-image">
          <p>
            <b>Изображение: </b>
          </p>
          <img
            width="100"
            height="100"
            src={banner.image.url}
            alt={banner.name}
          />
        </div>
        {showPrice && (
          <p>
            <b>Цена:</b> от {price} тг
          </p>
        )}
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
          value={selectedSubCategory}
          onChange={(e) => setSelectedSubCategory(e.target.value)}
          name="categories"
        >
          <option defaultValue="">не выбрано</option>
          {subCategories.map((subCategory) => {
            return (
              <option key={subCategory.id} value={subCategory.name}>
                {subCategory.name}
              </option>
            );
          })}
        </select>
        <input type="file" onChange={onFileChange} />
        <div className="banner-image">
          <p>
            <b>Изображение: </b>
          </p>
          <img
            width="100"
            height="100"
            src={banner.image.url}
            alt={banner.name}
          />
          <button onClick={() => deleteUrl(banner.image.title)}>
            Удалить изображение
          </button>
        </div>
        <input
          type="text"
          placeholder="Название"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="checkbox"
          value={showPrice}
          checked={showPrice}
          onChange={(e) => setShowPrice(!showPrice)}
        />
        <input
          type="number"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="btn-edit" onClick={onEdit}>
          Редактировать
        </button>
      </Modal>
      <Modal open={isOpenTwo} onClose={() => setIsOpenTwo(false)}>
        <button className="btn-close" onClick={() => setIsOpenTwo(false)}>
          X
        </button>
        <div>
          <p>Вы действительно хотите удалить баннер:</p>
          <b>{name}</b>
        </div>

        <button className="btn-delete" onClick={onDelete}>
          Удалить
        </button>
      </Modal>
    </>
  );
};

export default Banner;
