import "../../assets/sass/main/style.scss";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const Catalog = () => {
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
                <span>Электроинструмент</span>
              </li>
            </ul>
          </div>
        </div>
        <section class="catalog">
          <div class="container">
            <h2 class="title catalog__title">Электроинструмент в Казахстане</h2>
            <ul class="catalog__list">
              <li class="catalog__item">
                <a class="catalog__item-link" href="#">
                  Единая аккумуляторная система
                </a>
                <p class="catalog__item-price">от 5 349 ₸</p>
              </li>
              <li class="catalog__item">
                <a class="catalog__item-link" href="#">
                  Перфораторы
                </a>
                <p class="catalog__item-price">от 15 200 ₸</p>
              </li>
              <li class="catalog__item">
                <a class="catalog__item-link" href="#">
                  Лазерные уровни
                </a>
                <p class="catalog__item-price">от 7 310 ₸</p>
              </li>
              <li class="catalog__item">
                <a class="catalog__item-link" href="#">
                  Граверы
                </a>
                <p class="catalog__item-price">от 5 349 ₸</p>
              </li>
              <li class="catalog__item">
                <a class="catalog__item-link" href="#">
                  Полировочные машины
                </a>
                <p class="catalog__item-price">от 15 200 ₸</p>
              </li>
              <li class="catalog__item">
                <a class="catalog__item-link" href="#">
                  Строительные фены
                </a>
                <p class="catalog__item-price">от 7 310 ₸</p>
              </li>
              <li class="catalog__item">
                <a class="catalog__item-link" href="#">
                  Шлифовальные машины
                </a>
                <p class="catalog__item-price">от 5 349 ₸</p>
              </li>
              <li class="catalog__item">
                <a class="catalog__item-link" href="#">
                  Штроборезы
                </a>
                <p class="catalog__item-price">от 15 200 ₸</p>
              </li>
              <li class="catalog__item">
                <a class="catalog__item-link" href="#">
                  Угловые шлифовальные машины (болгарки, УШМ)
                </a>
                <p class="catalog__item-price">от 7 310 ₸</p>
              </li>
              <li class="catalog__item">
                <a class="catalog__item-link" href="#">
                  Краскопульты
                </a>
                <p class="catalog__item-price">от 5 349 ₸</p>
              </li>
              <li class="catalog__item">
                <a class="catalog__item-link" href="#">
                  Шуруповерты
                </a>
                <p class="catalog__item-price">от 15 200 ₸</p>
              </li>
              <li class="catalog__item">
                <a class="catalog__item-link" href="#">
                  Миксеры строительные
                </a>
                <p class="catalog__item-price">от 7 310 ₸</p>
              </li>
            </ul>
          </div>
        </section>
        {/* @@include('components/_footer.html') */}
        <Footer />
      </div>
    </div>
  );
};

export default Catalog;
