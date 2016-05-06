angular.module('recuen.co').directive('repoInfo', [
  'templateUtils',
  function(templateUtils) {
    return {
      restrict: 'A',
      replace: true,
      template: templateUtils.getComponent('repo-info'),
      scope: {
        name: '@',
        repos: '@',
        commits: '@'
      }
    };
  }
]);
