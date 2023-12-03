document.addEventListener("DOMContentLoaded", init)

function init() {

  //card vars
  const cards = document.querySelectorAll('.card');
  const cardImages = document.querySelectorAll('.card__img')
  const cardTitles = document.querySelectorAll('.card__title');
  const cardTexts = document.querySelectorAll('.card__text');
  const cardIcons = document.querySelectorAll('.card__icon');
  const cardCompareLinks = document.querySelectorAll('.card__options-link');

  //modal vars
  let modal = document.querySelector('.modal');
  let modalCloseBtn = document.querySelector('.modal__btn-close');
  let modalText = document.querySelector('.modal__text');
  let modalGetStartedBtn = document.querySelector('.modal__btn-start');
  let modalCancelBtn = document.querySelector('.modal__btn-cancel');


  //modal
  const requestSimulation = (log) => {
    console.log(`Simulating POST request. Event log: ${log}`);
  };

  const hideModal = () => {
    modal.classList.remove('modal__show');
    modal.children[0].classList.remove('hide');
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('active');
        cards[i].children[0].classList.remove('active');
        cardImages[i].classList.remove('active');
        cardTitles[i].classList.remove('active');
        cardTexts[i].classList.remove('active');
        cardIcons[i].classList.remove('active');
    };
  };

  window.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.children[0].classList.add('hide');
      document.body.classList.remove('lock');
      setTimeout(hideModal, 500);
    }
  });

  modalCloseBtn.addEventListener('click', event => {
    requestSimulation('Click On Close Button From Modal');
    modal.children[0].classList.add('hide');
    document.body.classList.remove('lock');
    setTimeout(hideModal, 500);
  });

  modalCancelBtn.addEventListener('click', event => {
    requestSimulation('Click On Close Button From Modal');
    modal.children[0].classList.add('hide');
    document.body.classList.remove('lock');
    setTimeout(hideModal, 500);
  });

  modalGetStartedBtn.addEventListener('click', event => {
    requestSimulation('Click On Get Started Button From Modal');
    modal.children[0].classList.add('hide');
    document.body.classList.remove('lock');
    setTimeout(hideModal, 500);
  });

  const createModalContent = (text) => {
    modalText.innerText = text;
  };

  //card activation
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', event => {
      cards[i].classList.toggle('active');
      cards[i].children[0].classList.toggle('active');
      cardImages[i].classList.toggle('active');
      cardTitles[i].classList.toggle('active');
      cardTexts[i].classList.toggle('active');
      cardIcons[i].classList.toggle('active');
      createModalContent(cardTexts[i].innerText);
      document.body.classList.toggle('lock');
      modal.classList.add('modal__show');
    });
  };

  cardCompareLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.stopPropagation();
    });
  });

}
