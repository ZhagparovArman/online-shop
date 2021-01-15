import { Link } from "react-router-dom";
import About from "../components/main/About";
import Catalog from "../components/main/Catalog";
import Footer from "../components/main/Footer";
import Header from "../components/main/Header";
import ProductItem from "../components/main/ProductItem";
import Products from "../components/main/Products";

const Main = () => {
  return (
    <>
      <div class="overflow"></div>
      {/* @@include('components/_header.html') */}
      <Header />
      <div class="wrapper">
        <section class="banner">
          <div class="container">
            <div class="banner__wrapper">
              <div class="swiper-container banner__slider">
                <div class="swiper-wrapper"></div>
              </div>
              <button class="swiper-button-prev">
                <svg
                  viewBox="0 0 11 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.83333 1.4165L1 10.2498L9.83333 19.0832"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button class="swiper-button-next">
                <svg
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.16667 18.9165L10 10.0832L1.16667 1.24984"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section class="popular">
          <div class="container">
            <h2 class="title popular__title">Популярные товары</h2>
            <div class="popular__list">
              <Link class="popular__item product" to="/product-item">
                <div class="product__img">
                  <img
                    class="popular__item-img product__img-item"
                    src="images/item-1.png"
                    alt=""
                  />
                </div>
                <h3 class="popular__item-title product__title">32 725 ₸</h3>
                <p class="popular__item-descr product__descr">
                  22604 - "P.I.T." Перфоратор 26 mm 3,2 J 1000 W
                </p>
                <button class="main-button popular__item-button product__button">
                  Заказать
                </button>
              </Link>
              <Link class="popular__item product" to="/product-item">
                <div class="product__img">
                  <img
                    class="popular__item-img product__img-item"
                    src="images/item-1.png"
                    alt=""
                  />
                </div>
                <h3 class="popular__item-title product__title">32 725 ₸</h3>
                <p class="popular__item-descr product__descr">
                  22604 - "P.I.T." Перфоратор 26 mm 3,2 J 1000 W
                </p>
                <button class="main-button popular__item-button product__button">
                  Заказать
                </button>
              </Link>
              <Link class="popular__item product" to="/product-item">
                <div class="product__img">
                  <img
                    class="popular__item-img product__img-item"
                    src="images/item-1.png"
                    alt=""
                  />
                </div>
                <h3 class="popular__item-title product__title">32 725 ₸</h3>
                <p class="popular__item-descr product__descr">
                  22604 - "P.I.T." Перфоратор 26 mm 3,2 J 1000 W
                </p>
                <button class="main-button popular__item-button product__button">
                  Заказать
                </button>
              </Link>
              <Link class="popular__item product" to="/product-item">
                <div class="product__img">
                  <img
                    class="popular__item-img product__img-item"
                    src="images/item-1.png"
                    alt=""
                  />
                </div>
                <h3 class="popular__item-title product__title">32 725 ₸</h3>
                <p class="popular__item-descr product__descr">
                  22604 - "P.I.T." Перфоратор 26 mm 3,2 J 1000 W
                </p>
                <button class="main-button popular__item-button product__button">
                  Заказать
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* @@include('components/_footer.html') */}
        <Footer />
      </div>
      {/* <About />
      <Catalog />
      <Products />
      <ProductItem /> */}
    </>
  );
};
export default Main;
