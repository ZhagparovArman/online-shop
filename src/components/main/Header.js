import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <div>
      <Helmet></Helmet>
      <header class="header">
        <div class="container">
          <div class="header__top">
            <div class="header__top-left">
              <a class="header__top-left__logo logo" href="#">
                <img src={logo} alt="" />
              </a>
              <a class="header__top-left__call" href="tel:+77760000066">
                +7 776 000 00 66
              </a>
            </div>
            <form action="#" class="search header__top-search">
              <input
                class="search__input header__top-search__input"
                type="text"
                placeholder="Поиск по магазину"
              />
              <button class="search__button header__top-search__button">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7778 20.5555C16.1779 20.5555 20.5556 16.1779 20.5556 10.7778C20.5556 5.37766 16.1779 1 10.7778 1C5.37766 1 1 5.37766 1 10.7778C1 16.1779 5.37766 20.5555 10.7778 20.5555Z"
                    stroke="#B4B4B4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23 22.9998L17.6833 17.6831"
                    stroke="#B4B4B4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </form>
            <button class="header__top-burger">
              <span></span>
            </button>
          </div>
        </div>
        <div class="header__mobile">
          <form action="#" class="search">
            <input
              class="search__input"
              type="text"
              placeholder="Поиск по магазину"
            />
            <button class="search__button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7778 20.5555C16.1779 20.5555 20.5556 16.1779 20.5556 10.7778C20.5556 5.37766 16.1779 1 10.7778 1C5.37766 1 1 5.37766 1 10.7778C1 16.1779 5.37766 20.5555 10.7778 20.5555Z"
                  stroke="#B4B4B4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23 22.9998L17.6833 17.6831"
                  stroke="#B4B4B4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
        <div class="header__overflow"></div>
        <nav class="header__nav nav">
          <div class="nav__top">
            <div class="nav__title">Каталог</div>
            <button class="nav__close">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1L1 11"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 1L11 11"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div class="container">
            <ul class="nav__list">
              <li class="dropdown nav__item nav__item-hover">
                <a class="dropdown__title nav__item-link" href="#">
                  Электроинстурмент
                </a>
                <div class="dropdown__list nav__item-menu">
                  <div class="container">
                    <div class="nav__item-menu__wrapper">
                      <h3 class="nav__item-menu__title">
                        Электроинструмент в Казахстане
                      </h3>
                      <ul class="nav__item-menu__list">
                        <li class="nav__item-menu__item nav__item-menu__item--active">
                          <a class="nav__item-menu__item-link" href="#">
                            Единая аккумуляторная система
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Перфораторы
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Циркулярные пилы
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Строительные фены
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Граверы
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Полировочные машины
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Фрезеры
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Лазерные уровни
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Шлифовальные машины
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Штроборезы
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Электролобзики
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Миксеры строительные
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Шлифовальные машины
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Штроборезы
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Электролобзики
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Миксеры строительные
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Краскопульты
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Шуруповерты
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Электрорубанки
                          </a>
                        </li>
                        <li class="nav__item-menu__item">
                          <a class="nav__item-menu__item-link" href="#">
                            Угловые шлифовальные машины (болгарки, УШМ)
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="dropdown nav__item nav__item-hover">
                <a class="dropdown__title nav__item-link" href="#">
                  Тепловое оборудование
                </a>
                <div class="dropdown__list nav__item-menu">
                  <div class="container">
                    <h3 class="nav__item-menu__title">
                      Тепловое оборудование в Казахстане
                    </h3>
                    <ul class="nav__item-menu__list">
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Единая аккумуляторная система
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Перфораторы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Циркулярные пилы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Строительные фены
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Граверы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Полировочные машины
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Фрезеры
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Лазерные уровни
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Шлифовальные машины
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Штроборезы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Электролобзики
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Миксеры строительные
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Шлифовальные машины
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Штроборезы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Электролобзики
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Миксеры строительные
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Краскопульты
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Шуруповерты
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Электрорубанки
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Угловые шлифовальные машины (болгарки, УШМ)
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="dropdown nav__item nav__item-hover">
                <a class="dropdown__title nav__item-link" href="#">
                  Дом и Сад
                </a>
                <div class="dropdown__list nav__item-menu">
                  <div class="container">
                    <h3 class="nav__item-menu__title">
                      Дом и Сад в Казахстане
                    </h3>
                    <ul class="nav__item-menu__list">
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Единая аккумуляторная система
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Перфораторы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Циркулярные пилы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Строительные фены
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Граверы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Полировочные машины
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Фрезеры
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Лазерные уровни
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Шлифовальные машины
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Штроборезы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Электролобзики
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Миксеры строительные
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Шлифовальные машины
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Штроборезы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Электролобзики
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Миксеры строительные
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Краскопульты
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Шуруповерты
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Электрорубанки
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Угловые шлифовальные машины (болгарки, УШМ)
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="dropdown nav__item nav__item-hover">
                <a class="dropdown__title nav__item-link" href="#">
                  Силовая техника
                </a>
                <div class="dropdown__list nav__item-menu">
                  <div class="container">
                    <h3 class="nav__item-menu__title">
                      Силовая техника в Казахстане
                    </h3>
                    <ul class="nav__item-menu__list">
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Единая аккумуляторная система
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Перфораторы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Циркулярные пилы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Строительные фены
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Граверы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Полировочные машины
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Фрезеры
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Лазерные уровни
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Шлифовальные машины
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Штроборезы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Электролобзики
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Миксеры строительные
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Шлифовальные машины
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Штроборезы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Электролобзики
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Миксеры строительные
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Краскопульты
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Шуруповерты
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Электрорубанки
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Угловые шлифовальные машины (болгарки, УШМ)
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="dropdown nav__item nav__item-hover">
                <a class="dropdown__title nav__item-link" href="#">
                  Оборудование
                </a>
                <div class="dropdown__list nav__item-menu">
                  <div class="container">
                    <h3 class="nav__item-menu__title">
                      Оборудование в Казахстане
                    </h3>
                    <ul class="nav__item-menu__list">
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Единая аккумуляторная система
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Перфораторы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Циркулярные пилы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Строительные фены
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Граверы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Полировочные машины
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Фрезеры
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Лазерные уровни
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Шлифовальные машины
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Штроборезы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Электролобзики
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Миксеры строительные
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Шлифовальные машины
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Штроборезы
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Электролобзики
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Миксеры строительные
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Краскопульты
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Шуруповерты
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Электрорубанки
                        </a>
                      </li>
                      <li class="nav__item-menu__item">
                        <a class="nav__item-menu__item-link" href="#">
                          Угловые шлифовальные машины (болгарки, УШМ)
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
