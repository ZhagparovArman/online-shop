import { useState, useEffect } from "react";
import firebase from "../../firebase";
import Banner from "./Banner";
import Modal from "../shared/Modal";

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
        <button onClick={() => setIsOpen(false)} class="admin-popup__close">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1L1 17"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1L17 17"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="admin-popup banner-popup">
          <form onSubmit={onSubmit} class="form banner-popup__form">
            <div
              class={`form__item banner-popup__form-item file ${
                fileUrl.url && "active"
              }`}
            >
              <label class="banner-popup__form-item__file">
                <input
                  class="banner-popup__form-item__input"
                  type="file"
                  onChange={onFileChange}
                />
                <svg
                  width="81"
                  height="81"
                  viewBox="0 0 81 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M71.2222 1H9.77778C4.92994 1 1 4.92994 1 9.77778V71.2222C1 76.0701 4.92994 80 9.77778 80H71.2222C76.0701 80 80 76.0701 80 71.2222V9.77778C80 4.92994 76.0701 1 71.2222 1Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.139 31.7214C28.7749 31.7214 31.7223 28.7739 31.7223 25.138C31.7223 21.5021 28.7749 18.5547 25.139 18.5547C21.5031 18.5547 18.5557 21.5021 18.5557 25.138C18.5557 28.7739 21.5031 31.7214 25.139 31.7214Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M80.0001 53.6671L58.0556 31.7227L9.77783 80.0004"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p class="banner-popup__form-item__text">Выберите фон</p>
              </label>
              <img
                class="banner-popup__form-item__img"
                src={fileUrl.url}
                alt=""
              />
            </div>
            <div class="form__item banner-popup__form-item">
              <label
                class="form__item-label banner-popup__form-item__label"
                for=""
              >
                Выберите подкатегорию товара
              </label>
              <select
                value={selectedSubCategory}
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                name="categories"
                class="admin-popup__select-title form__item-input active"
              >
                <option defaultValue="">Выберите</option>
                {subCategories.map((subCategory) => {
                  return (
                    <option key={subCategory.id} value={subCategory.name}>
                      {subCategory.name}
                    </option>
                  );
                })}
              </select>
              {/* <div class="admin-popup__select-title form__item-input active">
                Выберите
              </div> */}
            </div>
            <div class="form__item">
              <label class="form__item-label" for="">
                Напишите заголовок
              </label>
              <input
                type="text"
                class="form__item-input"
                placeholder="Заголовок"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="form__item">
              <label class="checkbox admin" for="price">
                <input
                  class="checkbox__input"
                  type="checkbox"
                  id="price"
                  checked={showPrice}
                  value={showPrice}
                  onChange={(e) => setShowPrice(!showPrice)}
                />
                <span class="checkbox__text">Цена</span>
              </label>
            </div>
            <div class="admin-popup__input-range form__item">
              <span class="admin-popup__input-range__start">От:</span>
              <input
                type="number"
                class="admin-popup__input-range__price form__item-input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <span class="admin-popup__input-range__end">₸</span>
            </div>
            <button class="red-button form__submit">Сохранить</button>
          </form>
        </div>
        {/* <button className="btn-close" onClick={() => setIsOpen(false)}>
          X
        </button>
        <form onSubmit={onSubmit}>
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
        </form> */}
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
