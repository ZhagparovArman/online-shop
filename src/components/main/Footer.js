import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="footer__wrapper">
            <ul class="footer__list">
              <li class="dropdown footer__item">
                <h3 class="dropdown__title footer__item-title">
                  Каталог товаров
                </h3>
                <ul class="dropdown__list footer__item-nav">
                  <li class="footer__item-nav__item">
                    <a class="footer__item-nav__item-link" href="#">
                      Электроинструмент
                    </a>
                  </li>
                  <li class="footer__item-nav__item">
                    <a class="footer__item-nav__item-link" href="#">
                      Тепловое оборудование
                    </a>
                  </li>
                  <li class="footer__item-nav__item">
                    <a class="footer__item-nav__item-link" href="#">
                      Дом и Сад
                    </a>
                  </li>
                  <li class="footer__item-nav__item">
                    <a class="footer__item-nav__item-link" href="#">
                      Силовая техника
                    </a>
                  </li>
                  <li class="footer__item-nav__item">
                    <a class="footer__item-nav__item-link" href="#">
                      Оборудование
                    </a>
                  </li>
                  <li class="footer__item-nav__item">
                    <a class="footer__item-nav__item-link" href="#"></a>
                  </li>
                </ul>
              </li>
              <li class="dropdown footer__item">
                <h3 class="dropdown__title footer__item-title">Покупателям</h3>
                <ul class="dropdown__list footer__item-nav">
                  <li class="footer__item-nav__item">
                    <a class="footer__item-nav__item-link" href="#">
                      О магазине
                    </a>
                  </li>
                  <li class="footer__item-nav__item">
                    <a class="footer__item-nav__item-link" href="#">
                      Партнерам
                    </a>
                  </li>
                  <li class="footer__item-nav__item">
                    <a class="footer__item-nav__item-link" href="#">
                      Гарантия и возврат
                    </a>
                  </li>
                  <li class="footer__item-nav__item">
                    <a class="footer__item-nav__item-link" href="#">
                      Доставка
                    </a>
                  </li>
                  <li class="footer__item-nav__item">
                    <a class="footer__item-nav__item-link" href="#">
                      Оплата
                    </a>
                  </li>
                  <li class="footer__item-nav__item">
                    <a class="footer__item-nav__item-link" href="#">
                      CashBack и рассрочка
                    </a>
                  </li>
                  <li class="footer__item-nav__item">
                    <a class="footer__item-nav__item-link" href="#">
                      Кредит и рассрочка
                    </a>
                  </li>
                  <li class="footer__item-nav__item">
                    <a class="footer__item-nav__item-link" href="#">
                      Контакты
                    </a>
                  </li>
                </ul>
              </li>
              <li class="dropdown footer__item">
                <h3 class="dropdown__title footer__item-title">
                  Мы в соцсетях
                </h3>
                <ul class="dropdown__list footer__item-nav">
                  <li class="footer__item-nav__item">
                    <a class="footer__item-nav__item-link" href="#">
                      Вконтакте
                    </a>
                  </li>
                  <li class="footer__item-nav__item">
                    <a class="footer__item-nav__item-link" href="#">
                      Instagram
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer__item footer__contacts">
                <a
                  class="footer__contacts-link footer__contacts-phone"
                  href="tel:+77760000066"
                >
                  +7 776 000 00 66
                </a>
                <p class="footer__contacts-worktime">
                  Ежедевно с 9:00 до 21:00
                </p>
                <a
                  class="footer__contacts-link footer__contacts-email"
                  href="mailto:info@p-i-t.kz"
                >
                  info@p-i-t.kz
                </a>
                <a class="footer__contacts-link footer__contacts-form" href="#">
                  Связатся с нами
                </a>
                <a class="footer__contacts-link footer__contacts-form" href="#">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <div class="container">
            <div class="footer__bottom-wrapper">
              <p class="footer__bottom-text">
                © 2021 PIT tools - интернет магазин инструментов
              </p>
              <p class="footer__bottom-text">Сделано CodeUnion</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
