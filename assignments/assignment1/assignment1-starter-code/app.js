(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    // uglyfiable (minifiable)
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchString = '';
        $scope.message = '';

        $scope.checkQuantity = function () {

            if ($scope.lunchString.length == 0) {
                $scope.message = 'Please enter data first';
            } else if (stringSplitter($scope.lunchString).length <= 3) {
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much!';
            }
        };

        function stringSplitter(string) {
            var result = emptyValuesRemover(string.split(','));
            // putting this console here to witness trimification and splitification
            console.log(result);
            return result;
        }

        function emptyValuesRemover(array) {
            var nonEmptyValuesArray = [];

            for (var i = 0; i < array.length; i ++) {
                // needed to add the trim here since this is not an angular model declaration
                if (array[i].trim().length != 0) {
                    nonEmptyValuesArray.push(array[i]);
                }
            }

            return nonEmptyValuesArray;
        }

    };

})();
