import { useState, useEffect } from "react";
import firebase from "../../firebase";
import Banner from "./Banner";
import Modal from "../shared/Modal";
import "../../assets/sass/admin/shared.scss";
import "../../assets/sass/admin/banners.scss";

const db = firebase.firestore();

const Banners = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [banners, setBanners] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [showPrice, setShowPrice] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("subCategories").get();
      setSubCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref("images");
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const url = await fileRef.getDownloadURL();
    setFileUrl({ url: url, title: file.name });
  };

  // const deleteUrl = (name) => {
  //   const storageRef = firebase.storage().ref("images").child(name);
  //   storageRef.delete();
  // };

  const onSubmit = async (e) => {
    e.preventDefault();

    // if (!fileUrl) {
    //   return;
    // }
    await db.collection("banners").add({
      name: name,
      image: fileUrl,
      price: {
        price: price,
        showPrice: showPrice,
      },
      subCategory: selectedSubCategory,
    });
    fetchBanners();
  };

  const fetchBanners = async () => {
    const banners = await db.collection("banners").get();
    setBanners(banners.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <>
      <h1>Баннеры</h1>
      <button className="open-modal" onClick={() => setIsOpen(true)}>
        Создать баннер
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <button className="btn-close" onClick={() => setIsOpen(false)}>
          X
        </button>
        <form onSubmit={onSubmit}>
          <select
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
            name="categories"
          >
            <option defaultValue="">не созданы</option>
            {subCategories.map((subCategory) => {
              return (
                <option key={subCategory.id} value={subCategory.name}>
                  {subCategory.name}
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
          <div className="banner-price">
            <input
              className="show-price"
              type="checkbox"
              value={showPrice}
              onChange={(e) => setShowPrice(!showPrice)}
            />
            <input
              type="number"
              placeholder="Цена"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button className="btn-submit">Сохранить</button>
        </form>
      </Modal>

      <div className="banner-grid">
        {banners.map((banner) => (
          <Banner
            key={banner.id}
            subCategories={subCategories}
            banner={banner}
            fetchBanners={fetchBanners}
          />
        ))}
      </div>
    </>
  );
};

export default Banners;
