import { useState, useEffect } from "react";
import firebase from "../../firebase";
import Banner from "./Banner";

const db = firebase.firestore();

const Banners = () => {
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
  }, [subCategories]);

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
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const banners = await db.collection("banners").get();
      setBanners(banners.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchUsers();
  }, [banners]);

  return (
    <>
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
        <input
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

        <button>Submit</button>
      </form>

      <ul>
        {banners.map((banner) => {
          return (
            <Banner
              key={banner.id}
              subCategories={subCategories}
              banner={banner}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Banners;
