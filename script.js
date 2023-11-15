// script.js
function showMenu() {
    var menu = document.querySelector('.menu');
    if (menu) menu.style.display = 'flex';
  }
  
  function hideMenu() {
    var menu = document.querySelector('.menu');
    if (menu) menu.style.display = 'none';
  }
  
  window.addEventListener('resize', function() {
    var menu = document.querySelector('.menu');
    if (window.innerWidth > 1000) {
      if (menu) menu.style.display = 'flex';
    } else {
      if (menu) menu.style.display = 'none';
    }
  });
  
  document.addEventListener('DOMContentLoaded', (event) => {
    var menu = document.querySelector('.menu');
    if (window.innerWidth > 1000) {
      if (menu) menu.style.display = 'flex';
    } else {
      if (menu) menu.style.display = 'none';
    }
  });
