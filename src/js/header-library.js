const btnWatched = document.querySelector('#btnWatched');
const btnQueue = document.querySelector('#btnQueue');

const toggleBtnActive = e => {
  const clickedBtn = e.target;

  if (!clickedBtn.classList.contains('btn-current-active')) {
    btnWatched.classList.toggle('btn-current-active');
    btnQueue.classList.toggle('btn-current-active');
  }

  if (clickedBtn.classList.contains('btn-current-inactive')) {
    btnWatched.classList.toggle('btn-current-inactive');
    btnQueue.classList.toggle('btn-current-inactive');
  }
};

btnWatched.addEventListener('click', toggleBtnActive);
btnQueue.addEventListener('click', toggleBtnActive);
