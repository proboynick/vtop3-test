const messagesBlock = document.querySelector('.banner__messages');
const scroll = document.querySelector('.scrollbar');
const langBtn = document.querySelector('.lang-btn');
const langTexts = document.querySelectorAll('.lang-btn__text');
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const langBtnSmall = document.querySelector('.lang-btn_small');
const langImg = document.querySelector('.lang-img');

const MAX_SCROLL_OFFSET =
  messagesBlock.scrollHeight - messagesBlock.offsetHeight;

messagesBlock.addEventListener('scroll', () => {
  scroll.value = `${Math.round(
    (messagesBlock.scrollTop / MAX_SCROLL_OFFSET) * 100
  )}`;
});

scroll.addEventListener('input', () => {
  messagesBlock.scrollTop = `${scroll.value * MAX_SCROLL_OFFSET * 0.01}`;
});

const switchLanguage = () => {
  switch (langTexts[0].innerHTML) {
    case 'ru':
      langTexts.forEach((el) => (el.innerHTML = 'en'));
      break;
    case 'en':
      langTexts.forEach((el) => (el.innerHTML = 'ru'));
      break;
    default:
      break;
  }
};

langBtn.addEventListener('click', () => {
  switchLanguage();
});

langBtnSmall.addEventListener('click', () => {
  switchLanguage();
  langImg.classList.add('animated');
  setTimeout(() => {
    langImg.classList.remove('animated');
  }, 2000);
});

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  burgerMenu.classList.toggle('burger-menu_opened');
});

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu_opened');
  burger.classList.remove('burger_active');
});
