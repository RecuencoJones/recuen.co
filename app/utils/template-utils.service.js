angular.module('recuen.co').service('templateUtils', [
  '$templateCache',
  function($templateCache) {
    /**
     * Returns a template for given type of fragment.
     *
     * @param {string} type - fragment type.
     * @param {string} tpl - name of template.
     * @returns {string} HTML template.
     */
    function getTemplate(type, tpl) {
      var tplUrl = _.template('<%= type %>s/<%= tpl %>/<%= tpl %>.tpl.html');

      return $templateCache.get(tplUrl({
        type: type,
        tpl: tpl
      }));
    }

    return {
      getView: function(view) {
        return getTemplate('view', view);
      },
      getComponent: function(component) {
        return getTemplate('component', component);
      }
    };
  }
]);
