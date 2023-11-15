document.addEventListener('DOMContentLoaded', (event) => {
  function showMenu() {
      if (window.innerWidth < 1000) {
          var menu = document.querySelector('.menu');
          if (menu) menu.style.display = 'flex';
      }
  }

  function hideMenu() {
      if (window.innerWidth < 1000) {
          var menu = document.querySelector('.menu');
          if (menu) menu.style.display = 'none';
      }
  }

  if (window.innerWidth > 1000) {
      var menu = document.querySelector('.menu');
      if (menu) menu.style.display = 'flex';
  }
});
