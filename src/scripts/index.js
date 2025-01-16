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
const navigationLinks = document.querySelectorAll('.site-navigation__link')

const media = window.matchMedia('(width < 991px)')

media.addEventListener('change', e => updateNavigation(e))

burger.addEventListener('click', openNavigationMenu)
closeNavigation.addEventListener('click', closeNavigationMenu)
navigationWrapper.addEventListener('click', event => {
  const target = event.target

  if (target.matches('.header__navigation')) closeNavigationMenu()
})

navigationLinks.forEach(link => {
  link.addEventListener('click', closeNavigationMenu)
})

function openNavigationMenu() {
  navigationWrapper.classList.add('isShow')
  burger.setAttribute('aria-expanded', 'true')
  document.documentElement.classList.add('disabled-scroll')
}

function closeNavigationMenu() {
  navigationWrapper.classList.remove('isShow')
  burger.setAttribute('aria-expanded', 'false')
  document.documentElement.classList.remove('disabled-scroll')
}

function updateNavigation(e) {
  const isMobile = e.matches

  isMobile ? navigation.setAttribute('inert', '') : navigation.removeAttribute('inert')
}
