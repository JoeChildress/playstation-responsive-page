const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('#menuList');

menu.style.maxHeight = '0';

menuBtn.addEventListener('click', (e) => {
  if (menu.style.maxHeight == '0px') {
    menu.style.maxHeight = '130px';
  } else {
    menu.style.maxHeight = '0px';
  }
});
