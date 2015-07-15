var merge = require('broccoli-merge-trees');
var compileSass = require('broccoli-sass');

var includePaths = [
'assets',
'bower_components',
'bower_components/fontawesome/scss',
'bower_components/bourbon/app/assets/stylesheets',
'bower_components/neat/app/assets/stylesheets'];

var appCss = compileSass(includePaths, 'app.scss', 'app.css');

module.exports = merge(['public', 'bower_components', appCss]);
