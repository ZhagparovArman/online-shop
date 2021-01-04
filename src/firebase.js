import firebase from "firebase";
import "firebase/storage";

const config = {
  // apiKey: "AIzaSyCXRwxe8gcgEbPzgBSmqKuriPq8dISSLvI",
  // authDomain: "online-shop-361f3.firebaseapp.com",
  // projectId: "online-shop-361f3",
  // storageBucket: "online-shop-361f3.appspot.com",
  // messagingSenderId: "1066427031805",
  // appId: "1:1066427031805:web:b27c4ed02a4a026f32de94",
  apiKey: "AIzaSyDApHCNFPES42Djv50qTA1NnqKUUxDx-98",
  authDomain: "online-shop-4d8cf.firebaseapp.com",
  projectId: "online-shop-4d8cf",
  storageBucket: "online-shop-4d8cf.appspot.com",
  messagingSenderId: "976638404161",
  appId: "1:976638404161:web:ee83ad5f01e13a38b388c0",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
