"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require("postcss-import"),
            options: {
              path: ["node_modules"],
            },
          },
          require("tailwindcss")("./app/tailwind.config.js"),
          // {
          //   module: require("@fullhuman/postcss-purgecss"),
          //   options: {
          //     content: [
          //       "./app/index.html",
          //       "./app/templates/**/*.hbs",
          //       "./app/components/**/*.hbs",
          //     ],
          //   },
          // },
        ],
      },
    },
  });

  return app.toTree();
};
