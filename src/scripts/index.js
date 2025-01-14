import fslightbox from 'fslightbox'
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'
// import styles bundle
import 'swiper/css/bundle'

const swiper = new Swiper('.customers-slider', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
