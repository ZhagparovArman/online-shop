import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Popup from "./Popup";

const ProductItem = () => {
  return (
    <div>
      <div class="overflow"></div>
      {/* @@include('components/_header.html') @@include('components/_popup.html') */}
      <Header />
      <Popup />
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
                <a href="#">Единая аккумуляторная система</a>
              </li>
              <li class="breadcrumbs__list-item">
                <span>2402-Li - "P.I.T." - аккумулятор 24В-2А</span>
              </li>
            </ul>
          </div>
        </div>
        <section class="product-item">
          <div class="container">
            <div class="product-item__wrapper">
              <div class="product-item__img">
                <div class="swiper-container gallery-top">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img src="images/item-1.png" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="images/item-2.jpg" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="images/item-3.jpg" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="images/item-4.jpg" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="images/item-5.jpg" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="images/test.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="product-item__content">
                <h3 class="product-item__title">
                  2402-Li - "P.I.T." - аккумулятор 24В-2А в Казахстане
                </h3>
                <div class="swiper-container gallery-thumbs">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img src="images/item-1.png" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="images/item-2.jpg" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="images/item-3.jpg" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="images/item-4.jpg" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="images/item-5.jpg" alt="" />
                    </div>
                    <div class="swiper-slide">
                      <img src="images/test.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <p class="product-item__content-price">
                  <span class="product-item__content-price__sup">Цена</span>
                  <span class="product-item__content-price__value">
                    32 725 ₸
                  </span>
                </p>
                <button class="black-button product-item__content-button">
                  Оформить заказ
                </button>
                <p class="product-item__content-city">Ваш город: Алматы</p>
                <ul class="product-item__content-list">
                  <li class="product-item__content-list__title">
                    Доставка по Казахстану
                  </li>
                  <li class="product-item__content-list__subtitle">
                    Курьерской службой
                  </li>
                  <li class="product-item__content-list__descr">
                    Стоимость и сроки доставки зависит от региона получения,
                    вида и габаритов товара
                  </li>
                </ul>
                <ul class="product-item__content-list">
                  <li class="product-item__content-list__title">
                    Доставка в Алматы
                  </li>
                  <li class="product-item__content-list__subtitle">
                    Самовывоз
                  </li>
                  <li class="product-item__content-list__subtitle">Курьером</li>
                  <li class="product-item__content-list__descr">
                    Доставка осуществляется на следующий рабочий день после
                    заказа, при условии подтверждения заказа до 12:00
                  </li>
                  <li class="product-item__content-list__descr">
                    Стоимость доставки от 800 до 3 000 ₸ (рассчитывается
                    индивидуально)
                  </li>
                </ul>
                <ul class="product-item__content-list">
                  <li class="product-item__content-list__title">
                    Оплата в Алматы
                  </li>
                  <li class="product-item__content-list__subtitle">
                    Банковской картой
                  </li>
                  <li class="product-item__content-list__descr">
                    Online оплата банковскйой картой VISA, MasterCard
                  </li>
                  <li class="product-item__content-list__subtitle">
                    Оплата наличными
                  </li>
                  <li class="product-item__content-list__descr">
                    Оплата наличными при самовывозе
                  </li>
                </ul>
                <ul class="product-item__content-list">
                  <li class="product-item__content-list__title">
                    Оплата по Казахстану
                  </li>
                  <li class="product-item__content-list__subtitle">
                    Банковской картой
                  </li>
                  <li class="product-item__content-list__descr">
                    Online оплата банковскйой картой VISA, MasterCard
                  </li>
                </ul>
              </div>
            </div>

            <div class="product-item__descr">
              <div class="product-item__descr-specs">
                <h3 class="product-item__title">Характирисики</h3>
                <ul class="product-item__descr-specs__list">
                  <li class="product-item__descr-specs__item">
                    <span>Бренд</span>
                    <span>P.I.T.</span>
                  </li>
                  <li class="product-item__descr-specs__item">
                    <span>Тип</span>
                    <span>Быстрозажимной</span>
                  </li>
                  <li class="product-item__descr-specs__item">
                    <span>Частота (Hz)</span>
                    <span>50 Hz</span>
                  </li>
                  <li class="product-item__descr-specs__item">
                    <span>Напряжение (v)</span>
                    <span>220v</span>
                  </li>
                  <li class="product-item__descr-specs__item">
                    <span>Мощность (w)</span>
                    <span>500 w</span>
                  </li>
                  <li class="product-item__descr-specs__item">
                    <span>Ø патрона (mm)</span>
                    <span>10 mm</span>
                  </li>
                  <li class="product-item__descr-specs__item">
                    <span>Число оборотов (rpm)</span>
                    <span>2800</span>
                  </li>
                </ul>
              </div>

              <div class="product-item__descr-about">
                <h3 class="product-item__title">Описание</h3>
                <div class="product-item__descr-about__content">
                  <p class="product-item__descr-about__content-prgph">
                    Шуруповёрт, дрель-шуруповёрт, - ручной электроинструмент с
                    регулировкой вращающего момента, предназначенный для
                    закручивания и откручивания шурупов, саморезов, винтов,
                    дюбелей и других видов крепёжных изделий, а также сверления.
                    Электрический шуруповёрт работает от внешнего источника
                    тока.
                  </p>
                  <p class="product-item__descr-about__content-prgph">
                    Данная модель имеет реверс. Реверс – это изменение
                    направления вращения шпинделя для откручивания крепёжных
                    изделий. Для управления реверсом имеется двухпозиционный
                    переключатель.
                  </p>
                  <p class="product-item__descr-about__content-prgph">
                    Применен быстрозажимной трёхкулачковый патрон, который
                    позволяет зажать сверло или битодержатель без применения
                    зажимного ключа.
                  </p>
                  <p class="product-item__descr-about__content-prgph">
                    Так же имеется регулятор скорости, который удобно расположен
                    на самом курке для быстрого изменения скорости вращения
                  </p>
                </div>
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

export default ProductItem;
