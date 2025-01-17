const sourseFolder = './src' // папка с исходными файлами
const buildFolder = './public' // папка для готовых файлов

const paths = {
  // корневая папка для сервера
  root: buildFolder,

  html: {
    src: `${sourseFolder}/pages/*.html`,
    watch: [`${sourseFolder}/html/**/*.html`, `${sourseFolder}/components/**/*.html`],
    dest: `${buildFolder}`,
  },

  pug: {
    src: `${sourseFolder}/pages/*.pug`,
    watch: `${sourseFolder}/**/*.pug`,
    dest: `${buildFolder}`,
  },

  scss: {
    src: [`${sourseFolder}/pages/*.scss`],
    watch: `${sourseFolder}/**/*.scss`,
    dest: `${buildFolder}/css`,
  },

  images: {
    src: `${sourseFolder}/assets/images/**/*.{jpg,png}`,
    watch: `${sourseFolder}/assets/images/**/*.*`,
    dest: `${buildFolder}/images`,
    svg: `${sourseFolder}/assets/images/**/*.svg`,
  },

  fonts: {
    src: `${sourseFolder}/assets/fonts/**/*.ttf`,
    watch: `${sourseFolder}/assets/fonts/**/*.ttf`,
    dest: `${buildFolder}/fonts`,
  },

  sprite: {
    src: `${sourseFolder}/assets/sprite/**/*.svg`,
    watch: `${sourseFolder}/assets/sprite/**/*.svg`,
    dest: `${buildFolder}/images`,
  },

  scripts: {
    src: `${sourseFolder}/scripts/*.js`,
    watch: [`${sourseFolder}/scripts/**/*.js`, `${sourseFolder}/components/**/*.js`],
    dest: `${buildFolder}/js`,
  },

  media: {
    src: `${sourseFolder}/assets/media/**/*.*`,
    watch: `${sourseFolder}/assets/media/**/*.*`,
    dest: `${buildFolder}/`,
  },

  vendors: {
    src: `${sourseFolder}/vendors/**/*.*`,
    watch: `${sourseFolder}/vendors/**/*.*`,
    dest: `${buildFolder}/vendors/`,
  },
}

export default paths
