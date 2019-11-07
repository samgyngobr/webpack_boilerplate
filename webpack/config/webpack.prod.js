
var path  = require('path');
var merge = require('webpack-merge');
var dev   = require('./webpack.dev');

module.exports = merge( dev, {
    mode : 'production'
});
