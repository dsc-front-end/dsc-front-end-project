function navbar() {
  const burger = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav-items');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
}
navbar();
