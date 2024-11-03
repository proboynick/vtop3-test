const messagesBlock = document.querySelector('.banner__messages');
const scroll = document.querySelector('.scrollbar');
const langBtn = document.querySelector('.lang-btn');
const langText = document.querySelector('.lang-btn__text');
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

const MAX_SCROLL_OFFSET =
  messagesBlock.scrollHeight - messagesBlock.offsetHeight;

messagesBlock.addEventListener('scroll', () => {
  scroll.value = `${Math.round(
    (messagesBlock.scrollTop / MAX_SCROLL_OFFSET) * 100
  )}`;
});

scroll.addEventListener('input', () => {
  messagesBlock.scrollTop = `${scroll.value * MAX_SCROLL_OFFSET * 0.01}`;
  console.log(messagesBlock.scrollTop, scroll.value);
});

langBtn.addEventListener('click', () => {
  switch (langText.innerHTML) {
    case 'ru':
      langText.innerHTML = 'en';
      break;
    case 'en':
      langText.innerHTML = 'ru';
      break;
    default:
      break;
  }
});

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  burgerMenu.classList.toggle('burger-menu_opened');
});

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu_opened');
  burger.classList.remove('burger_active');
});
