const multiply = require('./multiply')

describe('multiply', () => {
    it('multiplies 2 and 2', () => {
        expect(multiply(2, 2)).toBe(4);
    });
    
    it ('mulitplies 5 and 4', () => {
        expect(multiply(5, 4)).toBe(20);
    })
});