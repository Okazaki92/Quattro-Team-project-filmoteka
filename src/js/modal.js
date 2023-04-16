
  const qs = e => document.querySelector(e)

  const closeBtn = qs("#modal__close")
  const imageItem = qs(".movies__list")
  const modal = qs(".modal")
  
  
    const openModal = (e) => {
      if (!e.target.classList.contains("movie__image")) {
      return;
    } 
      modal.classList.remove('is-hidden');
    }
 
    const closeModal = () => {

      modal.classList.add('is-hidden');
    }
    closeBtn.addEventListener('click', closeModal);
    imageItem.addEventListener('click', openModal);