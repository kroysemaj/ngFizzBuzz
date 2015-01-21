'use strict';

/**
 * @ngdoc function
 * @name ngFizzBuzzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngFizzBuzzApp
 */
angular.module('ngFizzBuzzApp')
  .controller('MainCtrl', function ($scope, fizzbuzzer) {
    $scope.result = '';

    var insults = [
      'asshat',
      'dumb butt',
      'dipstick',
      'shit-for-brains',
      'ass clown',
      'face ...guy',
      'dum-dum',
      'stupidhead',
      'butt face',
      'butt head'
    ];

    $scope.isFizzBuzzy = function(fizzer) {
      console.log(fizzer);
      composeMessage(fizzer);
    };

    function composeMessage(fizzNumber) {
      console.log('fb', fizzbuzzer(fizzNumber));
      if(!fizzbuzzer(fizzNumber)){
        $scope.result = 'That is not a number, ' + insults[Math.floor(Math.random()*10)];
      } else {
        $scope.result = 'That is ' + fizzbuzzer(fizzNumber);
      }
    }


  });
