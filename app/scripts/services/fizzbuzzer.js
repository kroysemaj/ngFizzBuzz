'use strict';

/**
 * @ngdoc service
 * @name ngFizzBuzzApp.fizzbuzzer
 * @description
 * # fizzbuzzer
 * Service in the ngFizzBuzzApp.
 */
angular.module('ngFizzBuzzApp')
  .service('fizzbuzzer', function () {

    function isFizzyBuzzy(fizzBuzzNum) {
      return fizzBuzzNum % 15 === 0;
    }

    function isFizzy(fizzBuzzNum) {
      return fizzBuzzNum % 3 === 0;
    }

    function isBuzzy(fizzBuzzNum) {
      return fizzBuzzNum % 5 === 0;
    }

    function isNumeric(fizzBuzzNum) {
      return typeof fizzBuzzNum !== 'number';
    }

    return function(fbNumber){
      fbNumber = parseInt(fbNumber);
      if (isNumeric(fbNumber)) {
        return false;
      }

      if(isFizzyBuzzy(fbNumber)){
        return 'fizzybuzzy';
      }else if(isFizzy(fbNumber)){
        return 'fizzy';
      } else if (isBuzzy(fbNumber)){
        return 'buzzy';
      } else {
        return fbNumber;
      }
    };
  });
