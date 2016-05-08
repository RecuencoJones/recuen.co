angular.module('recuen.co').controller('NavbarCtrl', [
  '$scope', '$state',
  function($scope, $state) {
    /**
     * Checks whether given state is active.
     * @param {string} state - state to check.
     * @returns {boolean} whether the state is active.
     */
    $scope.isActive = function(state) {
      return $state.current.name === state;
    };
  }
]);
