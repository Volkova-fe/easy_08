const slidersLeft = document.querySelectorAll(".slide-in-left");
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

slidersLeft.forEach(slider => {
  appearOnScrollLeft.observe(slider);
});

//---------------------------------------------------------------

const slidersRight = document.querySelectorAll(".slide-in-right");
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


slidersRight.forEach(slider => {
  appearOnScrollRight.observe(slider);
});

//-------------------------------------------------------------------------------

const checkboxInputs = document.querySelector('.footer__icon_type_active');
const agreeSection = document.querySelector('.footer__agree');
const agreeSubmit = document.getElementById('#btnSubscribe');

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

const imgs = document.querySelectorAll("#numbers");
const maximgArrayChange = imgArrayChange.length - 1;
const maximgs = imgs.length - 1;



setInterval(() => {
  imgs.forEach(function () {
    ImgUrl = getRandomInt(0, maximgs);
    newImgUrl = getRandomInt(0, maximgArrayChange);
    imgs[ImgUrl].src = imgArrayChange[newImgUrl];
  });
}, 3000);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


