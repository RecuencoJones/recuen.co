angular.module('recuen.co').directive('navbar', [
  'templateUtils',
  function(templateUtils) {
    return {
      restrict: 'A',
      replace: true,
      controller: 'NavbarCtrl',
      template: templateUtils.getComponent('navbar')
    };
  }
]);
