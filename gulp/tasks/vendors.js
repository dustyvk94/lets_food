import { src, dest } from 'gulp'
import plumber from 'gulp-plumber'

import paths from '../config/path.js'
import { showNotify } from '../config/app.js'

const vendors = () => {
  return src(paths.vendors.src)
    .pipe(plumber(showNotify('Vendors library')))
    .pipe(dest(paths.vendors.dest))
}

export default vendors
