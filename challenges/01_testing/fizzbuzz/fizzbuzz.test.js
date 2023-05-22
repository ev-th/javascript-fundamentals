const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    it('returns \'Fizz\' when passed 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
    });

    it('returns \'Buzz\' when passed 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
    });

    it('returns 8 when passed 8', () => {
        expect(fizzbuzz(8)).toBe(8);
    });

    it('returns \'FizzBuzz\' when passed 15', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
    });

    it('returns \'Fizz\' when passed 18', () => {
        expect(fizzbuzz(18)).toBe('Fizz');
    });

    it('returns \'Buzz\' when passed 20', () => {
        expect(fizzbuzz(20)).toBe('Buzz');
    });
});