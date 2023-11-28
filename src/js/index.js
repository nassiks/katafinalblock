import "swiper/swiper.scss"
import 'swiper/modules/pagination.scss';
import '../scss/style.scss'

import Swiper from 'swiper/swiper';
import { Pagination } from 'swiper/modules';

//SWIPER
window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  resizableSwiper(
    '(max-width: 768px)',
    '.image-slider',
    {
      modules: [Pagination],
      loop: false,
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
  );

});

//ABOUT

const aboutShowButton = document.getElementById('showButtonAbout');
const aboutShowButtonText = document.getElementById('aboutShowButtonText');
const aboutShowButtonImg = document.getElementById('aboutShowButtonImg');
const aboutListItems = document.querySelectorAll('.about__text-medium, .about__text-large');

let showAllAbout = false;

function applyAboutVisibility() {
  aboutListItems.forEach(item => {
    item.style.display = showAllAbout ? 'block' : 'none';
  });
}

function initializeAboutVisibility() {
  showAllAbout = false;
  applyAboutVisibility();
}

initializeAboutVisibility();

aboutShowButton.addEventListener('click', function () {
  showAllAbout = !showAllAbout;
  aboutShowButtonText.textContent = showAllAbout ? 'Скрыть' : 'Читать все';
  aboutShowButtonImg.classList.toggle('image-rotated');

  applyAboutVisibility();
});

//BRANDS

const brandsShowButton = document.getElementById('showButtonBrands');
const brandsShowButtonText = document.getElementById('showButtonBrandsText');
const brandsShowButtonImg = document.getElementById('showButtonBrandsImg');
const brandsListItems = document.querySelectorAll('.brands__slide');

let showAll = false;

function applyBrandsVisibility() {
  const width = window.innerWidth;
  for (let i = 0; i < brandsListItems.length; i++) {
    if (showAll) {
      brandsListItems[i].style.display = 'inline-flex';
    } else {
      if (width >= 1366 && i < 8) {
        brandsListItems[i].style.display = 'inline-flex';
      } else if (width >= 768 && i < 6) {
        brandsListItems[i].style.display = 'inline-flex';
      } else if (width >= 768 && i >= 6 || width >= 1366 && i >= 8) {
        brandsListItems[i].style.display = 'none';
      } else {
        brandsListItems[i].style.display = 'inline-flex';
      }
    }
  }
}

function initializeBrandsVisibility() {
  showAll = false;
  applyBrandsVisibility();
}

initializeBrandsVisibility();

brandsShowButton.addEventListener('click', function () {
  showAll = !showAll;
  brandsShowButtonText.textContent = showAll ? 'Скрыть' : 'Показать все';
  brandsShowButtonImg.classList.toggle('image-rotated');

  applyBrandsVisibility();
});

window.addEventListener('resize', initializeBrandsVisibility);

//TECHNIC

const technicShowButton = document.getElementById('showButtonTechnic');
const technicShowButtonText = document.getElementById('showButtonTechnicText');
const technicShowButtonImg = document.getElementById('showButtonTechnicImg');
const technicListItems = document.querySelectorAll('.technic__slide');

let showAllTechnic = false;

function applyTechnicVisibility() {
  const width = window.innerWidth;
  for (let i = 0; i < technicListItems.length; i++) {
    if (showAllTechnic) {
      technicListItems[i].style.display = 'inline-flex';
    } else {
      if (width >= 1366 && i < 4) {
        technicListItems[i].style.display = 'inline-flex';
      } else if (width >= 768 && i < 3) {
        technicListItems[i].style.display = 'inline-flex';
      } else if (width >= 768 && i >= 3 || width >= 1366 && i >= 4) {
        technicListItems[i].style.display = 'none';
      } else {
        technicListItems[i].style.display = 'inline-flex';
      }
    }
  }
}

function initializeTechnicVisibility() {
  showAllTechnic = false;
  applyTechnicVisibility();
}

initializeTechnicVisibility();

technicShowButton.addEventListener('click', function () {
  showAllTechnic = !showAllTechnic;
  technicShowButtonText.textContent = showAllTechnic ? 'Скрыть' : 'Показать все';
  technicShowButtonImg.classList.toggle('image-rotated');

  applyTechnicVisibility();
});

window.addEventListener('resize', initializeTechnicVisibility);

//MODAL

let menuOverlay = document.getElementById('menu-overlay');
let openButton = document.getElementById('menu-open');
let closeButton = document.getElementById('menu-close');
let sidebarOverlay = document.getElementById('sidebarOverlay');
let modalOverlay = document.getElementById('modalOverlay');
let closeModalCallButton = document.getElementById('modal-call__close-button');
let closeModalFeedbackButton = document.getElementById('modal-feedback__close-button');
let modalCall = document.getElementById('modal__call');
let modalFeedback = document.getElementById('modal__feedback');
let menuCallOpen = document.getElementById('menu-call');
let menuCallHeaderOpen = document.getElementById('header-menu-call');
let menuFeedbackOpen = document.getElementById('menu-chat');
let menuFeedbackHeaderOpen = document.getElementById('header-menu-chat');


sidebarOverlay.addEventListener('click', function() {
  menuOverlay.classList.remove('section--active');
  sidebarOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', function() {
  modalCall.classList.remove('section--active');
  modalFeedback.classList.remove('section--active');
  modalOverlay.style.display = 'none';
});

closeButton.addEventListener('click', function() {
  menuOverlay.classList.remove('section--active');
  sidebarOverlay.style.display = 'none';
});

openButton.addEventListener('click', function() {
  menuOverlay.classList.add('section--active');
  sidebarOverlay.style.display = 'block';
});

menuCallOpen.addEventListener('click', function() {
  modalCall.classList.add('section--active');
  modalOverlay.style.display = 'block';
});

menuCallHeaderOpen.addEventListener('click', function() {
  modalCall.classList.add('section--active');
  modalOverlay.style.display = 'block';
});

closeModalCallButton.addEventListener('click', function() {
  modalCall.classList.remove('section--active');
  modalOverlay.style.display = 'none';
});

menuFeedbackOpen.addEventListener('click', function() {
  modalFeedback.classList.add('section--active');
  modalOverlay.style.display = 'block';
});

menuFeedbackHeaderOpen.addEventListener('click', function() {
  modalFeedback.classList.add('section--active');
  modalOverlay.style.display = 'block';
});

closeModalFeedbackButton.addEventListener('click', function() {
  modalFeedback.classList.remove('section--active');
  modalOverlay.style.display = 'none';
});


