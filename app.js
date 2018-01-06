(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    // uglyfiable (minifiable)
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

        $scope.lunchString = '';
        $scope.message = '';
        $scope.textColor = { 'color': 'red' };
        $scope.borderColor = { 'border': 'lightgrey 1px solid' };

        $scope.updateUI = function () {

            checkQuantity();
            changeTextColor();
            changeBorderColor();
        }

         function checkQuantity () {

            if ($scope.lunchString.length == 0) {
                $scope.message = 'Please enter data first';
            } else if (splitString($scope.lunchString).length <= 3) {
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much!';
            }
        };

        function splitString(string) {

            var result = removeEmptyValues(string.split(','));

            return result;
        }

        function removeEmptyValues(array) {
            var nonEmptyValuesArray = [];

            for (var i = 0; i < array.length; i ++) {
                if (array[i].trim().length != 0) {
                    nonEmptyValuesArray.push(array[i]);
                }
            }

            return nonEmptyValuesArray;
        }

        function changeTextColor() {

            if (validateMessage()) {
                $scope.textColor = { 'color': 'green' };
            } else {
                $scope.textColor = { 'color': 'red' };
            }
        }

        function changeBorderColor() {

            if (validateMessage()) {
                $scope.borderColor = { 'border': 'green 1px solid' };
            } else {
                $scope.borderColor = { 'border': 'red 1px solid' };
            }
        }

        function validateMessage() {
            return $scope.message === 'Enjoy!' || $scope.message === 'Too much!';
        }

    };

})();
