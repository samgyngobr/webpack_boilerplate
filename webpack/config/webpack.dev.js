
var path = require('path');

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode   : 'development',
    entry  : './src/app.js',
    output : {
        filename : 'bundle.js',
        path     : path.resolve(__dirname, '../../public_html/dist')
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          // Now we apply rule for images
          test: /\.(png|jpe?g|gif|svg|eot|woff|ttf|svg|woff2)$/,
          use: [
            {
              // Using file-loader for these files
              loader: "file-loader",

              // In options we can set different things like format
              // and directory to save
              options: {
                outputPath: 'assets'
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [ MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.(scss)$/,
          use: [
            { loader: MiniCssExtractPlugin.loader }, //'style-loader', // inject CSS to page
            { loader: 'css-loader' }, // translates CSS into CommonJS modules
            {
              loader: 'postcss-loader', // Run postcss actions
              options: {
                plugins: function () { // postcss plugins, can be exported to postcss.config.js
                  return [ require('autoprefixer') ];
                }
              }
            },
            { loader: 'sass-loader' } // compiles Sass to CSS
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
    ],
}
