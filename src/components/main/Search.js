import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div>
      <div class="overflow"></div>
      {/* @@include('components/_header.html') */}
      <Header />
      <div class="wrapper">
        <section class="result">
          <div class="container">
            <h2 class="title result__title">
              По вашему запросу найдено 3 товара
            </h2>
            <div class="result__list">
              <Link class="product result__item" to="/product-item">
                <div class="product__img">
                  <img
                    class="popular__item-img product__img-item"
                    src="images/item-1.png"
                    alt=""
                  />
                </div>
                <h3 class="product__title">32 725 ₸</h3>
                <p class="product__descr">
                  22604 - "P.I.T." Перфоратор 26 mm 3,2 J 1000 W
                </p>
                <button class="main-button product__button">Заказать</button>
              </Link>
              <Link class="product result__item" to="/product-item">
                <div class="product__img">
                  <img
                    class="popular__item-img product__img-item"
                    src="images/item-1.png"
                    alt=""
                  />
                </div>
                <h3 class="product__title">32 725 ₸</h3>
                <p class="product__descr">
                  22604 - "P.I.T." Перфоратор 26 mm 3,2 J 1000 W
                </p>
                <button class="main-button product__button">Заказать</button>
              </Link>
              <Link class="product result__item" to="/product-item">
                <div class="product__img">
                  <img
                    class="popular__item-img product__img-item"
                    src="images/item-1.png"
                    alt=""
                  />
                </div>
                <h3 class="product__title">32 725 ₸</h3>
                <p class="product__descr">
                  22604 - "P.I.T." Перфоратор 26 mm 3,2 J 1000 W
                </p>
                <button class="main-button product__button">Заказать</button>
              </Link>
            </div>
          </div>
        </section>
        {/* @@include('components/_footer.html') */}
        <Footer />
      </div>
    </div>
  );
};

export default Search;
