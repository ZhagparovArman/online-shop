import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div class="overflow"></div>
      {/* @@include('components/_header.html') */}
      <Header />
      <div class="wrapper">
        <div class="breadcrumbs">
          <div class="container">
            <ul class="breadcrumbs__list">
              <li class="breadcrumbs__list-item">
                <a href="#">Магазин электроинструментов</a>
              </li>
              <li class="breadcrumbs__list-item">
                <a href="#">Электроинструмент</a>
              </li>
              <li class="breadcrumbs__list-item">
                <span>Единая аккумуляторная система</span>
              </li>
            </ul>
          </div>
        </div>
        <section class="products">
          <div class="container">
            <div class="products__top">
              <h2 class="title products__title">
                Единая аккумуляторная система в Казахстане
              </h2>
              <form action="#" class="products__top-filter">
                <p class="products__top-filter__text">Сортировать по:</p>
                <div class="products__top-filter__buttons">
                  <button class="products__top-filter__button products__top-filter__button-price products__top-filter__button--active">
                    цене
                    <span></span>
                  </button>
                  <button class="products__top-filter__button">
                    популярности
                  </button>
                </div>
              </form>
            </div>

            <div class="products__content">
              <aside class="dropdown products__content-filter aside-filter">
                <button class="dropdown__title aside-filter__title">
                  Фильтр
                </button>
                <form action="#" class="dropdown__list aside-filter__form">
                  <div class="aside-filter__form-item">
                    <h4 class="aside-filter__form-item__title">Бренд</h4>
                    <div class="aside-filter__form-item-wrapper">
                      <label
                        class="checkbox aside-filter__form-item__checkbox"
                        for="brand"
                      >
                        <input
                          type="checkbox"
                          class="checkbox__input"
                          name="brand"
                          id="brand"
                        />
                        <span>P.I.T.</span>
                      </label>
                    </div>
                  </div>

                  <div class="aside-filter__form-item">
                    <h4 class="aside-filter__form-item__title">
                      Емкость аккумулятора
                    </h4>
                    <div class="aside-filter__form-item-wrapper">
                      <label
                        class="checkbox aside-filter__form-item__checkbox"
                        for="acc-1"
                      >
                        <input
                          type="checkbox"
                          class="checkbox__input"
                          name="acc-1"
                          id="acc-1"
                        />
                        <span>2.0</span>
                      </label>
                      <label
                        class="checkbox aside-filter__form-item__checkbox"
                        for="acc-2"
                      >
                        <input
                          type="checkbox"
                          class="checkbox__input"
                          name="acc-2"
                          id="acc-2"
                        />
                        <span>4.0</span>
                      </label>
                    </div>
                  </div>

                  <div class="aside-filter__form-item">
                    <h4 class="aside-filter__form-item__title">
                      Напряжение (v)
                    </h4>
                    <div class="aside-filter__form-item-wrapper">
                      <label
                        class="checkbox aside-filter__form-item__checkbox"
                        for="voltage"
                      >
                        <input
                          type="checkbox"
                          class="checkbox__input"
                          name="voltage"
                          id="voltage"
                        />
                        <span>24</span>
                      </label>
                    </div>
                  </div>

                  <div class="aside-filter__form-item">
                    <h4 class="aside-filter__form-item__title">Мощность (w)</h4>
                    <input
                      type="number"
                      class="aside-filter__form-item__input"
                      placeholder="От"
                    />
                    <input
                      type="number"
                      class="aside-filter__form-item__input"
                      placeholder="До"
                    />
                  </div>

                  <div class="aside-filter__form-item">
                    <h4 class="aside-filter__form-item__title">
                      Число оборотов (rpm)
                    </h4>
                    <div class="aside-filter__form-item-wrapper">
                      <label
                        class="checkbox aside-filter__form-item__checkbox"
                        for="rpm-1"
                      >
                        <input
                          type="checkbox"
                          class="checkbox__input"
                          name="rpm-1"
                          id="rpm-1"
                        />
                        <span>380</span>
                      </label>
                      <label
                        class="checkbox aside-filter__form-item__checkbox"
                        for="rpm-2"
                      >
                        <input
                          type="checkbox"
                          class="checkbox__input"
                          name="rpm-2"
                          id="rpm-2"
                        />
                        <span>480</span>
                      </label>
                      <label
                        class="checkbox aside-filter__form-item__checkbox"
                        for="rpm-3"
                      >
                        <input
                          type="checkbox"
                          class="checkbox__input"
                          name="rpm-3"
                          id="rpm-3"
                        />
                        <span>12000</span>
                      </label>
                      <label
                        class="checkbox aside-filter__form-item__checkbox"
                        for="rpm-4"
                      >
                        <input
                          type="checkbox"
                          class="checkbox__input"
                          name="rpm-4"
                          id="rpm-4"
                        />
                        <span>13500</span>
                      </label>
                      <label
                        class="checkbox aside-filter__form-item__checkbox"
                        for="rpm-5"
                      >
                        <input
                          type="checkbox"
                          class="checkbox__input"
                          name="rpm-5"
                          id="rpm-5"
                        />
                        <span>14000</span>
                      </label>
                    </div>
                  </div>

                  <div class="aside-filter__form-item">
                    <h4 class="aside-filter__form-item__title">
                      Размер подошвы (ленты)
                    </h4>
                    <div class="aside-filter__form-item-wrapper">
                      <label
                        class="checkbox aside-filter__form-item__checkbox"
                        for="size-1"
                      >
                        <input
                          type="checkbox"
                          class="checkbox__input"
                          name="size-1"
                          id="size-1"
                        />
                        <span>125</span>
                      </label>
                      <label
                        class="checkbox aside-filter__form-item__checkbox"
                        for="size-2"
                      >
                        <input
                          type="checkbox"
                          class="checkbox__input"
                          name="size-2"
                          id="size-2"
                        />
                        <span>76 x 533</span>
                      </label>
                      <label
                        class="checkbox aside-filter__form-item__checkbox"
                        for="size-3"
                      >
                        <input
                          type="checkbox"
                          class="checkbox__input"
                          name="size-3"
                          id="size-3"
                        />
                        <span>90 х 187</span>
                      </label>
                      <label
                        class="checkbox aside-filter__form-item__checkbox"
                        for="size-4"
                      >
                        <input
                          type="checkbox"
                          class="checkbox__input"
                          name="size-4"
                          id="size-4"
                        />
                        <span>100 х 610</span>
                      </label>
                      <label
                        class="checkbox aside-filter__form-item__checkbox"
                        for="size-5"
                      >
                        <input
                          type="checkbox"
                          class="checkbox__input"
                          name="size-5"
                          id="size-5"
                        />
                        <span>100 х 610</span>
                      </label>
                    </div>
                  </div>

                  <button class="black-button aside-filter__form-submit">
                    Применить фильтр
                  </button>
                </form>
              </aside>

              <div class="products__content-list">
                <a
                  class="products__content-item product"
                  href="product-item.html"
                >
                  <div class="product__img products__content-item__img">
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
                </a>
                <a
                  class="products__content-item product"
                  href="product-item.html"
                >
                  <div class="product__img products__content-item__img">
                    <img
                      class="popular__item-img product__img-item"
                      src="images/test.webp"
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
                </a>
                <a
                  class="products__content-item product"
                  href="product-item.html"
                >
                  <div class="product__img products__content-item__img">
                    <img
                      class="popular__item-img product__img-item"
                      src="images/item-2.webp"
                      alt=""
                    />
                  </div>
                  <h3 class="popular__item-title product__title">32 725 ₸</h3>
                  <p class="popular__item-descr product__descr">
                    22640-Li - "P.I.T." - Аккумуляторный перфоратор
                  </p>
                  <button class="main-button popular__item-button product__button">
                    Заказать
                  </button>
                </a>
                <a
                  class="products__content-item product"
                  href="product-item.html"
                >
                  <div class="product__img products__content-item__img">
                    <img
                      class="popular__item-img product__img-item"
                      src="images/item-3.webp"
                      alt=""
                    />
                  </div>
                  <h3 class="popular__item-title product__title">323 725 ₸</h3>
                  <p class="popular__item-descr product__descr">
                    22640-Li - "P.I.T." - Аккумуляторный перфоратор
                  </p>
                  <button class="main-button popular__item-button product__button">
                    Заказать
                  </button>
                </a>
                <a
                  class="products__content-item product"
                  href="product-item.html"
                >
                  <div class="product__img products__content-item__img">
                    <img
                      class="popular__item-img product__img-item"
                      src="images/item-4.webp"
                      alt=""
                    />
                  </div>
                  <h3 class="popular__item-title product__title">25 725 ₸</h3>
                  <p class="popular__item-descr product__descr">
                    31036 "P.I.T." Бесщеточный шуруповерт 18 v 10 mm Li-ion
                    31036 "P.I.T." Бесщеточный шуруповерт 18 v 10 mm Li-ion
                  </p>
                  <button class="main-button popular__item-button product__button">
                    Заказать
                  </button>
                </a>
                <a
                  class="products__content-item product"
                  href="product-item.html"
                >
                  <div class="product__img products__content-item__img">
                    <img
                      class="popular__item-img product__img-item"
                      src="images/item-5.webp"
                      alt=""
                    />
                  </div>
                  <h3 class="popular__item-title product__title">25 725 ₸</h3>
                  <p class="popular__item-descr product__descr">
                    22640-Li - "P.I.T." - Аккумуляторный перфоратор
                  </p>
                  <button class="main-button popular__item-button product__button">
                    Заказать
                  </button>
                </a>
                <a
                  class="products__content-item product"
                  href="product-item.html"
                >
                  <div class="product__img products__content-item__img">
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
                </a>
                <a
                  class="products__content-item product"
                  href="product-item.html"
                >
                  <div class="product__img products__content-item__img">
                    <img
                      class="popular__item-img product__img-item"
                      src="images/item-2.webp"
                      alt=""
                    />
                  </div>
                  <h3 class="popular__item-title product__title">32 725 ₸</h3>
                  <p class="popular__item-descr product__descr">
                    22640-Li - "P.I.T." - Аккумуляторный перфоратор
                  </p>
                  <button class="main-button popular__item-button product__button">
                    Заказать
                  </button>
                </a>
                <a
                  class="products__content-item product"
                  href="product-item.html"
                >
                  <div class="product__img products__content-item__img">
                    <img
                      class="popular__item-img product__img-item"
                      src="images/item-3.webp"
                      alt=""
                    />
                  </div>
                  <h3 class="popular__item-title product__title">323 725 ₸</h3>
                  <p class="popular__item-descr product__descr">
                    22640-Li - "P.I.T." - Аккумуляторный перфоратор
                  </p>
                  <button class="main-button popular__item-button product__button">
                    Заказать
                  </button>
                </a>
                <a
                  class="products__content-item product"
                  href="product-item.html"
                >
                  <div class="product__img products__content-item__img">
                    <img
                      class="popular__item-img product__img-item"
                      src="images/item-4.webp"
                      alt=""
                    />
                  </div>
                  <h3 class="popular__item-title product__title">25 725 ₸</h3>
                  <p class="popular__item-descr product__descr">
                    31036 "P.I.T." Бесщеточный шуруповерт 18 v 10 mm Li-ion
                  </p>
                  <button class="main-button popular__item-button product__button">
                    Заказать
                  </button>
                </a>
                <a
                  class="products__content-item product"
                  href="product-item.html"
                >
                  <div class="product__img products__content-item__img">
                    <img
                      class="popular__item-img product__img-item"
                      src="images/item-5.webp"
                      alt=""
                    />
                  </div>
                  <h3 class="popular__item-title product__title">25 725 ₸</h3>
                  <p class="popular__item-descr product__descr">
                    22640-Li - "P.I.T." - Аккумуляторный перфоратор
                  </p>
                  <button class="main-button popular__item-button product__button">
                    Заказать
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* @@include('components/_footer.html') */}
        <Footer />
      </div>
    </div>
  );
};

export default Products;
