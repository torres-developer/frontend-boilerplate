"use strict";

export default (ctx) => ({
  map: ctx.options.map,
  plugins: {
    colorguard: null,
    "webp-in-css/plugin": {
      modules: true
    },
    /*"avif-in-css": {
      modules: true
    },*/
    "postcss-preset-env": {
      stage: 1,
    },
    autoprefixer: null,
    cssnano: {
      preset: "advanced",
    },
  },
});
