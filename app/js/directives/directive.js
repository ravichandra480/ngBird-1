define(['app'], function(app)
{
    app.directive('tabs', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function($scope, $element) {

            },
            template:'<div class="tabbable">hi</div>',
            replace: true
        };
    });
});