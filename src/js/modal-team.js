const footerLink = document.querySelector('.footer__text--link');
const modalTeam = document.querySelector('#modalTeam');
const close = document.querySelector('.close');

footerLink.addEventListener('click', () => {
  modalTeam.style.display = 'block';
  modalTeam.classList.add('modalIn');
});

close.addEventListener('click', () => {
  modalTeam.classList.remove('modalIn');
  modalTeam.classList.add('modalOut');

  setTimeout(() => {
    modalTeam.style.display = 'none';
    modalTeam.classList.remove('modalOut');
  }, 200);
});
