// script.js
var hideMenuTimer;

window.resetTimer = function() {
  clearTimeout(hideMenuTimer);
}

window.startTimer = function() {
  hideMenuTimer = setTimeout(hideMenu, 10000);
}

window.showMenu = function() {
  var menu = document.querySelector('.submenu');
  if (menu) menu.style.display = 'flex';
}

window.hideMenu = function() {
  var menu = document.querySelector('.submenu');
  if (menu) menu.style.display = 'none';
}

// Mostrar el menú cuando se hace clic en el icono de barras
var barsIcon = document.querySelector('.bars-icon');
if (barsIcon) {
  barsIcon.addEventListener('click', function() {
    showMenu();
    startTimer();
  });
}

// Mostrar el menú si la anchura de la ventana es mayor que 1000px
window.addEventListener('resize', function() {
  var menu = document.querySelector('.submenu');
  if (window.innerWidth > 1000) {
    if (menu) menu.style.display = 'flex';
  } else {
    if (menu) menu.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  var menu = document.querySelector('.submenu');
  if (window.innerWidth > 1000) {
    if (menu) menu.style.display = 'flex';
  } else {
    if (menu) menu.style.display = 'none';
  }
});
