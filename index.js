const messagesBlock = document.querySelector('.banner__messages');
const scroll = document.querySelector('.scrollbar');

messagesBlock.addEventListener('scroll', () => {
  scroll.value = `${Math.round(
    (messagesBlock.scrollTop /
      (messagesBlock.scrollHeight - messagesBlock.offsetHeight)) *
      100
  )}`;
});
