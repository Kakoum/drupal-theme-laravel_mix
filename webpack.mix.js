// webpack.mix.js

let mix = require('laravel-mix');

mix
  .js('src/js/main.js', 'js')
  .autoload({
    jquery: ['$', 'window.jQuery']
  })
  .sass('src/scss/main.scss', 'css')
  .options({
    postCss: [ require('tailwindcss') ],
  })
  .sourceMaps()
  .setPublicPath('dist');

//extract