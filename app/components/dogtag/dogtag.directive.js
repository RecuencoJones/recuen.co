angular.module('recuen.co').directive('dogtag', [
  'templateUtils',
  function(templateUtils) {
    return {
      restrict: 'A',
      replace: true,
      scope: {
        name: '@',
        country: '@',
        blood: '@',
        division: '@',
        regiment: '@',
        motto: '@'
      },
      template: templateUtils.getComponent('dogtag')
    };
  }
]);
