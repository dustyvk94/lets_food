import { src, dest, parallel } from 'gulp'
import plumber from 'gulp-plumber'
import { showNotify } from '../config/app.js'

const faviconImages = () => {
  return src('./src/assets/favicon/images/*', { encoding: false })
    .pipe(plumber(showNotify('Favicon Images')))
    .pipe(dest('./public/images/favicon'))
}

const faviconSite = () => {
  return src('./src/assets/favicon/site/*', { encoding: false })
    .pipe(plumber(showNotify('Favicon Site')))
    .pipe(dest('./public/'))
}

const favicon = parallel(faviconImages, faviconSite)
export default favicon
