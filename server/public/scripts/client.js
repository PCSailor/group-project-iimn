var app = angular.module('fhatApp', ['ngMaterial','ui.router','firebase','chart.js', 'cfp.hotkeys'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('deep-orange');
});
