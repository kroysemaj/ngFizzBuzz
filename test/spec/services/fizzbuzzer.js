'use strict';

describe('Service: fizzbuzzer', function () {

  // load the service's module
  beforeEach(module('ngFizzBuzzApp'));

  // instantiate service
  var fizzbuzzer;
  beforeEach(inject(function (_fizzbuzzer_) {
    fizzbuzzer = _fizzbuzzer_;
  }));

  it('should be a thing', function () {
    expect(!!fizzbuzzer).toBe(true);
    //The !! is a little too 'clever' for me usually, but it's an accepted pattern for casting booleans in JS.
  });

  it('returns a function', function() {
    expect(fizzbuzzer).toEqual(jasmine.any(Function));
  });

  it('should return a number that is neither fizzy or buzzy', function() {
    expect(fizzbuzzer(2)).toBe(2);
  });

  it('should return fizzy if a number is divisible  by 3', function() {
    expect(fizzbuzzer(3)).toBe('fizzy');
  });

  it('should return buzzy if a number is divisible by 5', function() {
    expect(fizzbuzzer(5)).toBe('buzzy');
  });

  it('should return fizzybuzzy if a number is divisible by both 3 and 5', function() {
    expect(fizzbuzzer(15)).toBe('fizzybuzzy');
  });

  xit('should return fizzybuzzy first even though all three conditions are true', function() {
    expect(fizzbuzzer(45)).toBe('fizzybuzzy');
  });

  it('should return false if passed something other than a Number', function() {
    expect(fizzbuzzer('wharglbargl')).toBe(false);
  });



});
