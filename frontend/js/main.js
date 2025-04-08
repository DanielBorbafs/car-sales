/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) => {
  const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId);

  if (headerToggle && navbarId) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('show-menu');

      toggleBtn.classList.toggle('bx-x');
    });
  }

  if (headerToggle === True) {
    nav.classList.remove('show-menu');
  }
};
showMenu('header-toggle', 'navbar');

/* Criar funcao ou adaptar essa de cima para quando clicar de volta no chevron ele tambem fechar */

const linkColor = document.querySelectorAll('.nav__link');

function colorLink() {
  linkColor.forEach((l) => l.classList.remove('active'));
  this.classList.add('active');
}

linkColor.forEach((l) => l.addEventListener('click', colorLink));
