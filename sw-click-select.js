'use strict';

/**
 * sw-click-select
 * https://github.com/jakubburkiewicz/sw-click-select
 *
 * Version: 0.0.1 - 2014.09.09
 * License: MIT
 */

angular.module('sw.click-select', [])

  /* sw-click-select directive */
  .directive('swClickSelect', function() {
    return {

      restrict: 'A',
      link: function(scope, element, attrs) {
        element.on('click', function() {
          this.select();
        });
      }

    };
  }); // /end sw-click-select directive
