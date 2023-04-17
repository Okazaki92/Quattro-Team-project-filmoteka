const navMyLibrary = document.querySelector('#navMyLibrary');
const navHome = document.querySelector('#navHome');
const formSearch = document.querySelector('#formSearch');
const headerHome = document.querySelector('#headerHome');
const headerNav = document.querySelector('#headerNav');

//==========add two btn===============
navMyLibrary.addEventListener('click', e => {
  e.preventDefault();

  headerHome.classList.add('header-library');

  navHome.classList.remove('navigation__item--current');
  navMyLibrary.classList.add('navigation__item--current');

  formSearch.style.display = 'none';

  const innerHtml = `
  <ul class="btn-library">
    <li class="btn-library__item">
  <button id="btnWatched" class="btn-library__button btn-current-active">
  watched
  </button>
  </li>
  <li class="btn-library__item btn-library__button--space">
  <button id="btnQueue" class="btn-library__button">queue</button>
  </li>
  </ul>`;

  headerNav.insertAdjacentHTML('afterend', innerHtml);

  const btnWatched = document.querySelector('#btnWatched');
  const btnQueue = document.querySelector('#btnQueue');

  //===========change active btn===============

  btnQueue.addEventListener('click', e => {
    e.preventDefault();

    btnWatched.classList.remove('btn-current-active');
    btnQueue.classList.add('btn-current-active');
  });

  btnWatched.addEventListener('click', e => {
    e.preventDefault();

    btnQueue.classList.remove('btn-current-active');
    btnWatched.classList.add('btn-current-active');
  });
});
