const { add } = require('../src/calculator');

test('adds numbers', () => {
    expect(add(2,3)).toBe(5);
});