//====================================================|
// WEBPACK CONFIG: PROD


//--------------------------| Import

const glob = require('glob');
const path = require('path');
const loaders = glob.sync(`${__dirname}/loaders/**/*.js`).map(file => require( path.resolve( file ) ));
const plugins = glob.sync(`${__dirname}/plugins/**/*.js`).map(file => require( path.resolve( file ) ));
const commonLoaders = glob.sync(`${__dirname}/../common/loaders/**/*.js`).map(file => require( path.resolve( file ) ));
const commonPlugins = glob.sync(`${__dirname}/../common/plugins/**/*.js`).map(file => require( path.resolve( file ) ));


//--------------------------| Configuration

const config = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: 'app.[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [...loaders, ...commonLoaders]
  },
  plugins: [...plugins, ...commonPlugins]
};


//--------------------------| Export

module.exports = config;
