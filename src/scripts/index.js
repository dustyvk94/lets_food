import fslightbox from 'fslightbox'
import Swiper from 'swiper/bundle'

import 'swiper/css/bundle'

const swiper = new Swiper('.customers-slider', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 'auto',
    },
  },
})

// Mobile menu
const burger = document.querySelector('.burger')
const closeNavigation = document.querySelector('.header__close-navigation')
const navigationWrapper = document.querySelector('.header__navigation')
const navigation = document.querySelector('.site-navigation')

burger.addEventListener('click', openNavigationMenu)
closeNavigation.addEventListener('click', closeNavigationMenu)
navigationWrapper.addEventListener('click', event => {
  const target = event.target

  if (target.matches('.header__navigation')) closeNavigationMenu()
})

function openNavigationMenu() {
  navigationWrapper.classList.add('isShow')
  navigation.setAttribute('aria-hidden', 'true')
  burger.setAttribute('aria-expanded', 'true')
}

function closeNavigationMenu() {
  navigationWrapper.classList.remove('isShow')
  navigation.setAttribute('aria-hidden', 'false')
  burger.setAttribute('aria-expanded', 'false')
}
