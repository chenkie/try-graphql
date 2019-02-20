const webpack = require('webpack');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const copyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = withPlugins(
  [withImages, withFonts, [withCss, { cssModules: true }]],
  {
    webpack: config => {
      // Explicitly ignore `.flow` files because GraphiQL, for whatever
      // insane reason, ships `.flow` files that get picked up by Webpack
      // and Next.js
      //
      // > https://github.com/apollographql/apollo-client-devtools/pull/59/files
      config.plugins.push(new webpack.IgnorePlugin(/\.flow$/));
      config.plugins.push(
        new copyWebpackPlugin([
          {
            from: path.join(__dirname, '/node_modules/graphiql/graphiql.css'),
            to: path.join(__dirname, '/static/graphiql.css')
          },
          {
            from: path.join(
              __dirname,
              '/node_modules/graphiql-material-theme/style.css'
            ),
            to: path.join(__dirname, '/static/graphiql-material.css')
          }
        ])
      );

      return config;
    }
  }
);
