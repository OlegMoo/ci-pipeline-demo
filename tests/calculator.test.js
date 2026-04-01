const { add } = require('../src/calculator');
const { subtract } = require('../src/calculator');
const { multiply } = require('../src/calculator');
const { divide } = require('../src/calculator');
const { power } = require('../src/calculator');

test('adds numbers', () => {
    expect(add(2,3)).toBe(5);
});

test('subtract numbers', () => {
    expect(subtract(3,2)).toBe(1);
});
        
test('multiply numbers', () => {
    expect(multiply(3,2)).toBe(6);
});
        
test('divide 10 / 2 = 5', () => {
    expect(divide(10, 2)).toBe(5);
});
        
test('division by zero throws error', () => {
    expect(() => divide(5, 0)).toThrow();
});

test('power 10^2 = 100', () => {
    expect(power(10, 2)).toBe(100);
});