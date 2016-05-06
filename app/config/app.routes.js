angular.module('recuen.co').config([
  '$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    function templater(view) {
      return ['templateUtils', function(templateUtils) {
        return templateUtils.getView(view);
      }];
    }

    $stateProvider

    .state('home', {
      url: '/home',
      controller: 'HomeCtrl',
      templateProvider: templater('home')
    })

    .state('activity', {
      url: '/activity',
      controller: 'ActivityCtrl',
      templateProvider: templater('activity')
    });

    $urlRouterProvider.otherwise('/home');
  }
]);
