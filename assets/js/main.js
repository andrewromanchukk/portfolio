const menuToggle = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('#site-navigation');
const navigationLinks = document.querySelectorAll('#site-navigation a');

const setMenuState = (isOpen) => {
  menuToggle?.setAttribute('aria-expanded', String(isOpen));
  menuToggle?.querySelector('.sr-only')?.replaceChildren(
    document.createTextNode(isOpen ? 'Close menu' : 'Open menu'),
  );
  siteNavigation?.classList.toggle('is-open', isOpen);
};

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  setMenuState(!isOpen);
});

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => setMenuState(false));
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 52rem)').matches) {
    setMenuState(false);
  }
});
