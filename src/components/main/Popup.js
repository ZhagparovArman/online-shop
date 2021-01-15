import { Link } from "react-router-dom";
const Popup = () => {
  return (
    <div>
      <div class="popup">
        <button class="popup__close">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1L1 17"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1L17 17"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="popup__wrapper">
          <img class="popup__img" src="images/item-1.png" alt="" />
          <h3 class="popup__title">
            2402-Li - "P.I.T." - аккумулятор 24В-2А в Казахстане
          </h3>
          <form action="#" class="popup__form">
            <input class="popup__form-input" type="text" placeholder="Имя" />
            <input
              class="popup__form-input popup__form-input-number phone"
              type="tel"
              placeholder="Номер"
            />
            <input
              class="popup__form-input email"
              type="email"
              placeholder="Почта"
            />
            <button class="main-button popup__form-submit">
              Оформить заказ
            </button>
          </form>
        </div>
        <div class="lds-ripple popup__loader">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
