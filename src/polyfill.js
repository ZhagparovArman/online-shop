import Swiper from "swiper";
const overflow = document.querySelector(".overflow");
const headerNav = document.querySelector(".header__nav .container");
const nav = document.querySelector(".nav");
const navClose = document.querySelector(".nav__close");
const headerNavOverflow = document.querySelector(".header__overflow");
const headerBurger = document.querySelector(".header__top-burger");
const wrapper = document.querySelector(".wrapper");
const dropdownTitle = document.querySelectorAll(".dropdown__title");
// Массив с баннерами  для главной страницы
const banners = [
  {
    class: "",
    items: [
      {
        title: "Мотобуры",
        price: "65 641₸",
        img: "images/banner-1.jpg",
        classes: "big",
        href: "#",
        fullPage: false,
      },
      {
        title: "Дрель",
        price: "65 641₸",
        img: "images/banner-2.jpg",
        classes: "small small-1",
        href: "#",
        fullPage: false,
      },
      {
        title: "Тример",
        price: "65 641₸",
        img: "images/banner-3.jpg",
        classes: "small small-2",
        href: "#",
        fullPage: false,
      },
    ],
  },
  {
    class: "simple",
    items: [
      {
        title: "Мотобуры",
        price: "65 641₸",
        img: "images/banner-1.jpg",
        classes: "big",
        href: "#",
        fullPage: true,
      },
    ],
  },
];

function slideTemplate(classes, items) {
  let fragment = "";
  items.forEach((slide) => {
    fragment += slideItemTemplate(
      slide.title,
      slide.price,
      slide.classes,
      slide.img,
      slide.href
    );
  });
  return `
    <div class="swiper-slide banner__slide ${classes}">
        ${fragment}
    </div>
    `;
}

function slideItemTemplate(title, price, classes, img, href) {
  return `
        <div class="banner__slide-item ${classes}">
            <img class="banner__slide-item__bg" src=${img} alt="">
            <h3 class="banner__slide-item__title">
                ${title}
            </h3>
            <p class="banner__slide-item__price">
                от ${price}
            </p>
            <a class="banner__slide-item__button" href=${href}>
                Подробнее
            </a>
        </div>
    `;
}

function generateDesktopSlides(arr) {
  let wrapper = document.querySelector(".banner__slider .swiper-wrapper");
  let fragment = "";
  arr.forEach((item) => {
    fragment += slideTemplate(item.class, item.items);
  });
  wrapper.innerHTML = fragment;
}

function generateMobileSlides(arr) {
  let wrapper = document.querySelector(".banner__slider .swiper-wrapper");
  let fragment = "";
  arr.map((slide) => {
    // Получение всех слайдов из items
    slide.items.map((item) => {
      let slide = slideItemTemplate(
        item.title,
        item.price,
        "",
        item.img,
        item.href
      );
      // Все слайды становятся одиночными
      let final = `
                <div class="swiper-slide banner__slide simple">
                    ${slide}
                </div>
            `;
      fragment += final;
      wrapper.innerHTML = fragment;
    });
  });
}

function editBannerSlider() {
  // Проверяем находимся ли мы в главной страницу

  if (document.querySelector(".banner__slider")) {
    if (window.innerWidth > 550) {
      generateDesktopSlides(banners);
    } else {
      generateMobileSlides(banners);
    }
    let bannerSlider = new Swiper(".banner__slider", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

function hoverHandler(type) {
  const navItems = document.querySelectorAll(".nav__item");
  navItems.forEach((item) => {
    if (type === "remove") {
      item.classList.remove("nav__item-hover");
    } else if (type === "add") {
      item.classList.add("nav__item-hover");
    }
  });
}

function classListHandler(arr, type, className) {
  arr.forEach((item) => {
    if (type === "add") {
      item.classList.add(className);
    } else if (type === "remove") {
      item.classList.remove(className);
    }
  });
}

function onResizeHandler() {
  if (window.innerWidth > 950) {
    headerNav.addEventListener("mouseover", () => {
      wrapper.classList.add("active");
    });
    headerNav.addEventListener("mouseout", () => {
      wrapper.classList.remove("active");
    });
    hoverHandler("add");
  } else {
    headerNav.addEventListener(
      "mouseover",
      () => {
        wrapper.classList.remove("active");
      },
      false
    );
    headerNav.addEventListener(
      "mouseout",
      () => {
        wrapper.classList.remove("active");
      },
      false
    );
    hoverHandler("remove");
  }
}

function openAcc(e, title, items) {
  e.preventDefault();
  const parent = e.target.closest(title);
  const nav = parent.querySelector(items);
  nav.classList.toggle("active");
  e.target.classList.toggle("active");
}

headerBurger.addEventListener("click", () => {
  classListHandler([nav, headerNavOverflow, document.body], "add", "active");
});
headerNavOverflow.addEventListener("click", () => {
  classListHandler([nav, headerNavOverflow, document.body], "remove", "active");
});
navClose.addEventListener("click", () => {
  classListHandler([nav, headerNavOverflow, document.body], "remove", "active");
});

window.addEventListener("resize", () => {
  onResizeHandler();
  editBannerSlider();
});
document.addEventListener("DOMContentLoaded", function () {
  onResizeHandler();
  editBannerSlider();
  dropdownTitle.forEach((title) => {
    title.addEventListener("click", (e) => {
      openAcc(e, ".dropdown", ".dropdown__list");
    });
  });
  // Проверяем находимся ли мы в станице товара
  if (document.querySelector(".product-item")) {
    let err = 0;
    const form = document.querySelector(".popup__form");
    const inputPhone = document.querySelector(".popup__form-input-number");
    const popupBtn = document.querySelector(".product-item__content-button");
    const popupClose = document.querySelector(".popup__close");
    const popup = document.querySelector(".popup");
    const validate = document.querySelectorAll(".popup__form-input");
    popupBtn.addEventListener("click", () => {
      classListHandler([overflow, popup, document.body], "add", "active");
    });
    function formValidate(form) {
      for (let i = 0; i < form.length; i++) {
        if (form[i].classList.contains("email")) {
          const emailTest = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
          if (!emailTest.test(form[i].value)) {
            form[i].classList.add("wrong");
            setTimeout(() => {
              form[i].classList.remove("wrong");
            }, 1000);
            return err++;
          }
        } else if (form[i].classList.contains("phone")) {
          var phoneValidate = form[i].value
            .replace(/[^\w\s]/g, "")
            .split(" ")
            .join("");
          if (phoneValidate.length !== 11) {
            form[i].classList.add("wrong");
            setTimeout(() => {
              form[i].classList.remove("wrong");
            }, 1000);
            return err++;
          }
        } else if (!form[i].value) {
          form[i].classList.add("wrong");
          setTimeout(() => {
            form[i].classList.remove("wrong");
          }, 1000);
          return err++;
        }
        err = 0;
      }
    }

    inputPhone.addEventListener("keydown", function (event) {
      if (
        !(
          event.key == "ArrowLeft" ||
          event.key == "ArrowRight" ||
          event.key == "Backspace" ||
          event.key == "Tab"
        )
      ) {
        event.preventDefault();
      }
      var mask = "+7 (111) 111-11-11"; // Задаем маску

      if (/[0-9\+\ \-\(\)]/.test(event.key)) {
        // Здесь начинаем сравнивать this.value и mask
        // к примеру опять же
        var currentString = this.value;
        var currentLength = currentString.length;
        if (/[0-9]/.test(event.key)) {
          if (mask[currentLength] == "1") {
            this.value = currentString + event.key;
          } else {
            for (var i = currentLength; i < mask.length; i++) {
              if (mask[i] == "1") {
                this.value = currentString + event.key;
                break;
              }
              currentString += mask[i];
            }
          }
        }
      }
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      formValidate(validate);
      if (err === 0) {
        // ОТПРАВКА ФОРМЫ
        // sendForm(form)
      }
    });
    popupClose.addEventListener("click", () => {
      classListHandler([overflow, popup, document.body], "remove", "active");
    });
    overflow.addEventListener("click", () => {
      classListHandler([overflow, popup, document.body], "remove", "active");
    });
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: "auto",
      touchRatio: 0,
    });
    var galleryTop = new Swiper(".gallery-top", {
      spaceBetween: 10,
      slidesPerView: 1,
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }
});
