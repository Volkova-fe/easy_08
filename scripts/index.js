//Анимация блока about слева

const fadeInLeft = document.querySelectorAll(".fade-in_position_left");
const appearOptionsLeft = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScrollLeft = new IntersectionObserver(function (
  entries,
  appearOnScrollLeft
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScrollLeft.unobserve(entry.target);
    }
  });
},
  appearOptionsLeft);

fadeInLeft.forEach(slider => {
  appearOnScrollLeft.observe(slider);
});

//---------------------------------------------------------------
//Анимация блока about слева
const fadeInRight = document.querySelectorAll(".fade-in_position_right");
const appearOptionsRight = {
  threshold: 0,
  rootMargin: "0px -250px 0px 0px",
};

const appearOnScrollRight = new IntersectionObserver(function (
  entries,
  appearOnScrollRight
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScrollRight.unobserve(entry.target);
    }
  });
},
  appearOptionsRight);


fadeInRight.forEach(slider => {
  appearOnScrollRight.observe(slider);
});

//-------------------------------------------------------------------------------

const checkboxInputs = document.querySelector('.footer__icon_type_active');
const agreeSection = document.querySelector('.footer__agree');
const formSubscribe = document.querySelector('.footer__form-container');

const openMenu = document.querySelector('.header__menu-icon');
const menuPopup = document.querySelector('.popup-menu');
const menuClose = document.querySelector('#close_popup')

const imgArrayChange = [
  './images/looks_photo-dayly-look-beigrbg.jpg',
  './images/looks_photo-dayly-look-bluebg.jpg',
  './images/looks_photo-devil-hat-beigrbg.jpg',
  './images/looks_photo-leather-jacket-beigrbg.jpg',
  './images/looks_photo-long-coat-greenbg.jpg',
  './images/looks_photo-blue.jpg',
  './images/looks_photo-limon.jpg',
  './images/looks_photo-orange.jpg',
  './images/looks_photo-peach.jpg',
  './images/looks_photo-pink.jpg',
  './images/looks_photo-red.jpg',
  './images/looks_photo-white.jpg',
  './images/looks_photo-yellow.jpg',
]

const imgs = document.querySelectorAll(".looks-grid__pic");

//--------------------------------------------------------------------------------

formSubscribe.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

//--------------------------------------------------------------------------------
//Реакция checkbox footer
agreeSection.addEventListener('click', function () {
  if (checkboxInputs.classList.contains('footer__icon_type_active')) {
    checkboxInputs.classList.remove('footer__icon_type_active');
    checkboxInputs.classList.add('footer__icon_type_noactive');
  }
  else {
    checkboxInputs.classList.remove('footer__icon_type_noactive');
    checkboxInputs.classList.add('footer__icon_type_active');
  }
})


//--------------------------------------------------------------------------------
//Анимация картинок блока look

function updateOneRandomImage() {
  var notPresentedImages = [];
  var presentedImages = [];
  imgs.forEach((element) => {
    presentedImages.push(element.getAttribute("src"));
  });
  for (var i = 0; i <= imgArrayChange.length; i++) {
    if (!presentedImages.includes(imgArrayChange[i]))
      notPresentedImages.push(imgArrayChange[i]);
  }
  var imgRnd = Math.floor(Math.random() * imgs.length);
  var img = imgs[imgRnd];
  var srcRnd = Math.floor(Math.random() * (notPresentedImages.length - 1));
  img.classList.remove("visible");
  img.classList.add("hidden");
  setTimeout(() => { img.src = notPresentedImages[srcRnd]; }, 300);
  setTimeout(() => { img.classList.remove("hidden"); }, 300);
  setTimeout(() => { img.classList.add("visible"); }, 300);
};

setInterval(() => {
  updateOneRandomImage();
}, 3000);
//----------------------------------------------------------------
//Открытие закрытие бургерного меню

function openPopup(popup) {
  popup.classList.add('popup-menu_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup-menu_opened');
}

openMenu.addEventListener('click', () => {
  openPopup(menuPopup);
});

menuClose.addEventListener('click', () => closePopup(menuPopup));
