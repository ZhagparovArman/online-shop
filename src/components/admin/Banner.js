import { useState } from "react";
import firebase from "../../firebase";

const Banner = ({ subCategories, banner }) => {
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
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("banners").doc(banner.id).delete();
    deleteUrl(banner.image.title);
  };
  return (
    <>
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
      <img width="100" height="100" src={banner.image.url} alt={banner.name} />
      <p>{banner.name}</p>
      <button onClick={() => deleteUrl(banner.image.title)}>delete</button>
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
      <button onClick={onEdit}>edit</button>
      <button onClick={onDelete}>Delete</button>
      <br />
    </>
  );
};

export default Banner;
