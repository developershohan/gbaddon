const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, args) => {
  const modeProduction = args.mode === "production" ? true : false;

  const config = {
    mode: args.mode,
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/, //sass,scss,css
          use: [
            miniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      new miniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
  };

  const Adminjs = Object.assign({}, config, {
    entry: [`${__dirname}/assets/dev/admin/js/index.js`],
    output: {
      path: `${__dirname}/assets/admin/js`,
      filename: modeProduction ? "admin.min.js" : "admin.js",
    },
  });

  const Frontendjs = Object.assign({}, config, {
    entry: [`${__dirname}/assets/dev/js/index.js`],
    output: {
      path: `${__dirname}/assets/js`,
      filename: modeProduction ? "frontend.min.js" : "frontend.js",
    },
  });

  const Admincss = Object.assign({}, config, {
    entry: [`${__dirname}/assets/dev/admin/scss/index.scss`],
    output: {
      path: `${__dirname}/assets/admin/css`
    },
    plugins: [
      new miniCssExtractPlugin({
        filename: modeProduction ? "admin.min.css" : "admin.css",
      }),
    ],
  });
  const Frontendcss = Object.assign({}, config, {
    entry: [`${__dirname}/assets/dev/scss/index.scss`],
    output: {
      path: `${__dirname}/assets/css`
    },
    plugins: [
      new miniCssExtractPlugin({
        filename: modeProduction ? "admin.min.css" : "admin.css",
      }),
    ],
  });

  return [Adminjs, Admincss, Frontendcss, Frontendjs];
};
