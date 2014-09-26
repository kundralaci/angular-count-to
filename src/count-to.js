var countTo = angular.module('countTo', [])
.directive('countTo', ['$timeout', function ($timeout) {
    return {
        replace: false,
        scope: {
           countTo : '=',
           countFrom : '='
        },
        link: function (scope, element, attrs) {

            var e = element[0];
            var num, refreshInterval, duration, steps, step, beginValue, multiplier, easing;

            var calculate = function () {
                refreshInterval = 30;
                step = 0;
                scope.timoutId = null;
                scope.countTo = scope.countTo || 0;
                scope.countFrom = scope.countFrom || 0;
                duration = (parseFloat(attrs.duration) * 1000) || 0;
                easing = parseFloat(attrs.easing) || 0.5;

                steps = Math.ceil(duration / refreshInterval);
                //increment = ((countTo - scope.value) / steps);
                multiplier = (scope.countTo - scope.countFrom)/(Math.pow(duration/1000, easing));
                beginValue = scope.countFrom;

                num = beginValue;
            }

            var tick = function () {
                scope.timoutId = $timeout(function () {
                    step++;
                    var t = (step*refreshInterval/1000);
                    num = beginValue + multiplier*(Math.pow(t, easing));
                    if (step >= steps) {
                        $timeout.cancel(scope.timoutId);
                        scope.countFrom = scope.countTo;
                    } else {
                        scope.countFrom = Math.round(num);
                        tick();
                    }
                }, refreshInterval);

            }

            var start = function () {
                if (scope.timoutId) {
                    $timeout.cancel(scope.timoutId);
                }
                calculate();
                tick();
            }

            scope.$watch('countTo', function(newValue, oldValue){
                if (newValue != undefined){
                    start();
                }
            });

            return true;
        }
    }
}]);